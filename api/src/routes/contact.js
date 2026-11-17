import { Router } from 'express';
import transporter, { isMailerConfigured } from '../utils/mailer.js';
import { validateContactForm } from '../utils/validate.js';
import { contactNotificationHtml } from '../templates/contact-notification.js';
import { contactAutoReplyHtml } from '../templates/contact-auto-reply.js';
import { contactRateLimit } from '../middleware/contact-rate-limit.js';
import logger from '../utils/logger.js';

const router = Router();

/**
 * POST /hcgi/api/contact
 *
 * Anti-spam layers:
 *   1. contactRateLimit — 5 req / 15 min per IP
 *   2. Honeypot field (_hp_website) — bots fill hidden fields
 *   3. Server-side validation — validates and sanitizes all submitted fields
 */
router.post('/', contactRateLimit, async (req, res) => {
	try {
		// ── Validate & sanitise ───────────────────────────────
		const { errors, sanitized } = validateContactForm(req.body);

		if (errors.length > 0) {
			if (errors.includes('Spam detected.')) {
				logger.warn('Contact form rejected: honeypot triggered', { ip: req.ip });
				return res.status(400).json({ error: 'Please review your submission and try again.' });
			}
			return res.status(400).json({ errors });
		}

		if (!isMailerConfigured || !transporter) {
			return res.status(503).json({
				error: 'Email delivery is not configured yet. Please try another contact channel.',
			});
		}

		const { name, email } = sanitized;
		const mailTo = process.env.MAIL_TO;
		const smtpUser = process.env.SMTP_USER;

		// ── Send notification to the Logicward contact mailbox ──────────────
		await transporter.sendMail({
			from: `"Logicward Website" <${smtpUser}>`,
			to: mailTo,
			replyTo: email,
			subject: `New Logicward project inquiry from ${name}`,
			html: contactNotificationHtml(sanitized),
		});

		logger.info(`Contact notification email sent to ${mailTo} from ${email}`);

		// ── Send auto-reply to the customer ──────────────────
		await transporter.sendMail({
			from: `"Logicward" <${smtpUser}>`,
			to: email,
			subject: 'Logicward received your project inquiry',
			html: contactAutoReplyHtml({ firstName: name.split(/\s+/)[0] }),
		});

		logger.info(`Auto-reply sent to ${email}`);

		return res.status(200).json({ success: true });

	} catch (err) {
		logger.error('Contact form email delivery failed:', err);
		return res.status(500).json({
			error: 'We could not send your inquiry. Please try again later.',
		});
	}
});

export default router;
