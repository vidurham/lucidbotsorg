import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors({
  origin: 'https://vidurham.github.io'
}));
app.use(express.json());

const SIGNUP_WEBHOOK = 'https://hooks.slack.com/services/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';
const PARTNER_WEBHOOK = 'https://hooks.slack.com/services/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';

app.post('/signup', async (req, res) => {
  try {
    const response = await fetch(SIGNUP_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    
    if (!response.ok) throw new Error('Slack API error');
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send to Slack' });
  }
});

app.post('/partner', async (req, res) => {
  try {
    const response = await fetch(PARTNER_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    
    if (!response.ok) throw new Error('Slack API error');
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send to Slack' });
  }
});

app.listen(3000); 