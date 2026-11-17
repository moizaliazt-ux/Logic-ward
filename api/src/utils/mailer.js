import nodemailer from 'nodemailer';
import logger from './logger.js';

export const isMailerConfigured = Boolean(
	process.env.SMTP_HOST &&
	process.env.SMTP_USER &&
	process.env.SMTP_PASS &&
	process.env.MAIL_TO,
);

const transporter = isMailerConfigured
	? nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT) || 465,
		secure: Number(process.env.SMTP_PORT) === 465,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	})
	: null;

/**
 * Verify SMTP connection on startup (non-blocking).
 */
export async function verifyMailer() {
	if (!transporter) {
		logger.warn('SMTP is not configured; contact emails are disabled');
		return;
	}

	try {
		await transporter.verify();
		logger.info('SMTP connection verified successfully');
	} catch (err) {
		logger.error('SMTP connection failed — emails will not be sent:', err.message);
	}
}

export default transporter;
