import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const formData = JSON.parse(event.body || '{}');
    
    // Log for debugging
    console.log('Received form data:', formData);
    console.log('Using webhook URL:', process.env.PARTNER_WEBHOOK_URL);

    const slackMessage = {
      text: "New Partnership Interest!",
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
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${formData.email}`
            }
          ]
        }
      ]
    };

    if (!process.env.PARTNER_WEBHOOK_URL) {
      throw new Error('Webhook URL not configured');
    }

    const response = await fetch(process.env.PARTNER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage)
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 