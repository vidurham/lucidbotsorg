export const config = {
  runtime: 'edge',
};

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await request.json();
    
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Slack API error');
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send to Slack' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 