// Replace these webhook URLs with your serverless function URLs
const SIGNUP_WEBHOOK_URL = 'https://hooks.slack.com/services/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';  // You'll need to create this endpoint
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

// Use direct webhook in development, API route in production
const PARTNER_ENDPOINT = import.meta.env.DEV 
  ? SLACK_WEBHOOK_URL 
  : '/api/partner';

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
      // Add CORS headers for direct Slack webhook calls
      ...(import.meta.env.DEV && {
        mode: 'no-cors'
      })
    });

    // When using no-cors, we can't read the response
    if (import.meta.env.DEV) {
      return true;
    }

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

  return sendToSlack(SIGNUP_WEBHOOK_URL, message);
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