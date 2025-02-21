import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event) => {
  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

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

    const message = {
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
          text: {
            type: "mrkdwn",
            text: `*Name:* ${formData.fullName}\n*Organization:* ${formData.organizationName}\n*Email:* ${formData.email}`
          }
        }
      ]
    };

    const response = await fetch(process.env.PARTNER_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      throw new Error(`Slack error: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
}; 