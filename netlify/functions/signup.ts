import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const sendToSlack = async (webhookUrl: string, message: any) => {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  
  if (!response.ok) {
    throw new Error(`Slack API error: ${response.statusText}`);
  }
  
  return response;
};

export const handler: Handler = async (event) => {
  // CORS headers for all responses
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        ...headers,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      }
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Validate webhook URL
    if (!process.env.SIGNUP_WEBHOOK_URL) {
      throw new Error('Webhook URL not configured');
    }

    // Parse and validate input
    let formData;
    try {
      formData = JSON.parse(event.body || '{}');
      if (!formData.fullName || !formData.companyName || !formData.email) {
        throw new Error('Missing required fields');
      }
    } catch (e) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request data' })
      };
    }

    // Simple message format
    const message = {
      text: `New Signup from ${formData.fullName}`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*New Signup*\n*Name:* ${formData.fullName}\n*Company:* ${formData.companyName}\n*Email:* ${formData.email}`
          }
        }
      ]
    };

    // Send to Slack
    await sendToSlack(process.env.SIGNUP_WEBHOOK_URL, message);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 