const NETLIFY_URL = 'https://prismatic-sundae-41a872.netlify.app';
const API_BASE = `${NETLIFY_URL}/.netlify/functions`;

async function sendToSlack(endpoint: string, message: any) {
  const response = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}

export async function sendSignupToSlack(formData: { fullName: string; companyName: string; email: string }) {
  return sendToSlack('signup', formData);
}

export async function sendPartnershipToSlack(formData: { fullName: string; organizationName: string; email: string }) {
  return sendToSlack('partner', formData);
} 