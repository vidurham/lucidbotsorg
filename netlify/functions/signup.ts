import { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  try {
    // Log incoming request
    console.log('Event body:', event.body);
    console.log('Webhook URL:', process.env.SIGNUP_WEBHOOK_URL);

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

    if (!event.body) {
      throw new Error('No body provided');
    }

    const formData = JSON.parse(event.body);
    
    // Validate form data
    if (!formData.fullName || !formData.companyName || !formData.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    if (!process.env.SIGNUP_WEBHOOK_URL) {
      throw new Error('Webhook URL not configured');
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
            text: `*Name:* ${formData.fullName}\n*Company:* ${formData.companyName}\n*Email:* ${formData.email}`
          }
        }
      ]
    };

    const response = await fetch(process.env.SIGNUP_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });

    const responseText = await response.text();
    console.log('Slack webhook URL:', process.env.SIGNUP_WEBHOOK_URL);
    console.log('Slack response:', responseText);
    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`Slack error: ${responseText} (Status: ${response.status})`);
    }

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
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 