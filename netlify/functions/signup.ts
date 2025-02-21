import { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
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
    const formData = JSON.parse(event.body || '{}');

    const message = {
      text: `New Sign Up from ${formData.fullName}`, // Required for Slack
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
          text: {
            type: "mrkdwn",
            text: `*Name:* ${formData.fullName}\n*Company:* ${formData.companyName}\n*Email:* ${formData.email}`
          }
        }
      ]
    };

    if (!process.env.SIGNUP_WEBHOOK_URL) {
      throw new Error('Webhook URL not configured');
    }

    const response = await fetch(process.env.SIGNUP_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      throw new Error(`Slack error: ${await response.text()}`);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 