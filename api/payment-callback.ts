// /api/payment-callback.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const callbackData = req.body;
    console.log('Received M-Pesa callback:', JSON.stringify(callbackData, null, 2));

    // TODO: Save to Supabase if successful
    // await supabase.from('transactions').insert({ ...callbackData });

    return res.status(200).json({ message: 'Callback received successfully' });
  } catch (error:any) {
    console.error('Callback handling error:', error.message);
    return res.status(500).json({ error: 'Failed to process callback' });
  }
}
