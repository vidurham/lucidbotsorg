import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event) => {
  // Fix the type comparison
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'OPTIONS') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': 'https://vidurham.github.io',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    const response = await fetch(process.env.SIGNUP_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Slack API error');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send to Slack' }),
    };
  }
}; 