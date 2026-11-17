/**
 * Contact-form server-side validation & sanitisation.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strip HTML tags */
function sanitize(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/<[^>]*>/g, '').replace(/\0/g, '').trim();
}

/**
 * Returns an array of error messages.  Empty array = valid.
 */
export function validateContactForm(body) {
	const errors = [];
	const payload = body && typeof body === 'object' ? body : {};

	const name = sanitize(payload.name).replace(/[\r\n]/g, ' ');
	const email = sanitize(payload.email);
	const phone = sanitize(payload.phone);
	const company = sanitize(payload.company);
	const service = sanitize(payload.service);
	const budget = sanitize(payload.budget);
	const projectDetails = sanitize(payload.projectDetails);

	// Required fields
	if (name.length < 2 || name.length > 100) {
		errors.push('Name must be 2–100 characters.');
	}
	if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
		errors.push('A valid email address is required.');
	}
	if (phone.length > 30) {
		errors.push('Phone must not exceed 30 characters.');
	}
	if (company.length > 120) {
		errors.push('Company must not exceed 120 characters.');
	}
	if (service.length > 160 || budget.length > 100) {
		errors.push('Service or budget selection is too long.');
	}
	if (projectDetails.length < 15 || projectDetails.length > 4000) {
		errors.push('Project details must be 15–4000 characters.');
	}
	if (payload.consent !== true) {
		errors.push('Privacy policy consent is required.');
	}

	// Honeypot — if the hidden field was filled, it's a bot
	if (payload._hp_website && payload._hp_website.length > 0) {
		errors.push('Spam detected.');
	}

	return {
		errors,
		sanitized: { name, email, phone, company, service, budget, projectDetails },
	};
}
