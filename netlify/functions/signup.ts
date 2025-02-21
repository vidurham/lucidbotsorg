import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
      };
    }

    const formData = JSON.parse(event.body || '{}');
    
    // Validate form data
    if (!formData.fullName || !formData.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    const message = {
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
          text: {
            type: "mrkdwn",
            text: `*Name:* ${formData.fullName}\n*Email:* ${formData.email}`
          }
        }
      ]
    };

    const response = await fetch(process.env.SIGNUP_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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