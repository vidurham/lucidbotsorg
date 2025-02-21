// Base URL for API endpoints
const API_BASE = '/.netlify/functions';  // Always use relative path

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

export async function sendSignupToSlack(formData: { fullName: string; companyName: string; email: string }) {
  const message: SlackMessage = {
    text: `New Sign Up from ${formData.fullName}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🎉 New Sign Up!",
          emoji: true
        }
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${formData.fullName}`
          },
          {
            type: "mrkdwn",
            text: `*Company:*\n${formData.companyName}`
          }
        ]
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Email:*\n${formData.email}`
          }
        ]
      }
    ]
  };

  return sendToSlackWithRetry(SIGNUP_ENDPOINT, message);
}

export async function sendPartnershipToSlack(formData: { fullName: string; organizationName: string; email: string }) {
  const message: SlackMessage = {
    text: `New Partnership Interest from ${formData.fullName}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🤝 New Partnership Interest!",
          emoji: true
        }
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${formData.fullName}`
          },
          {
            type: "mrkdwn",
            text: `*Organization:*\n${formData.organizationName}`
          }
        ]
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Email:*\n${formData.email}`
          }
        ]
      }
    ]
  };

  return sendToSlackWithRetry(PARTNER_ENDPOINT, message);
} 