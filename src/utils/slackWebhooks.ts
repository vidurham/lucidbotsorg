// Base URL for API endpoints
const API_BASE = import.meta.env.PROD 
  ? '/.netlify/functions'  // In production, use relative path
  : 'http://localhost:8888/.netlify/functions'; // For local development

// Use serverless functions instead of direct webhook URLs
const SIGNUP_ENDPOINT = `${API_BASE}/signup`;
const PARTNER_ENDPOINT = `${API_BASE}/partner`;

interface SlackMessage {
  text: string;
  blocks?: any[];
}

async function sendToSlack(webhookUrl: string, message: SlackMessage) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Error sending to Slack:', error);
    throw error;
  }
}

export async function sendSignupToSlack(formData: { fullName: string; companyName: string; email: string }) {
  const message: SlackMessage = {
    text: "New Sign Up", // Added required fallback text
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

  return sendToSlack(SIGNUP_ENDPOINT, message);
}

export async function sendPartnershipToSlack(formData: { fullName: string; organizationName: string; email: string }) {
  const message: SlackMessage = {
    text: "New Partnership Interest", // Required fallback text
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

  return sendToSlack(PARTNER_ENDPOINT, message);
} 