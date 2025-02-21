import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const config = {
  runtime: 'edge',
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const body = await event.json();
    
    const response = await fetch(body.webhookUrl, {
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
      body: JSON.stringify({ message: 'Success' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send to Slack' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}; 