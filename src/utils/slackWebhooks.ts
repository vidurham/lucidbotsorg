// Replace with your Netlify site URL
const NETLIFY_URL = 'https://prismatic-sundae-41a872.netlify.app';

// Base URL for API endpoints
const API_BASE = `${NETLIFY_URL}/.netlify/functions`;

// Endpoints
const SIGNUP_ENDPOINT = `${API_BASE}/signup`;
const PARTNER_ENDPOINT = `${API_BASE}/partner`;

interface SlackMessage {
  text: string;
  blocks?: any[];
}

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function sendToSlackWithRetry(
  url: string, 
  message: SlackMessage, 
  retryCount = 0
): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.message === 'Success') {
      return true;
    }
    throw new Error('Invalid response format');

  } catch (error) {
    console.error(`Attempt ${retryCount + 1} failed:`, error);
    
    if (retryCount < MAX_RETRIES) {
      await sleep(RETRY_DELAY);
      return sendToSlackWithRetry(url, message, retryCount + 1);
    }
    
    throw new Error(`Failed after ${MAX_RETRIES} attempts`);
  }
}

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