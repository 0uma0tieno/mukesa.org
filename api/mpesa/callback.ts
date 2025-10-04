// /api/mpesa-stkpush.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const DARAJA_BASE_URL =
  process.env.MPESA_ENV === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phoneNumber, amount } = req.body;
  if (!phoneNumber || !amount) {
    return res.status(400).json({ error: "Missing phoneNumber or amount" });
  }

  try {
    // 1️⃣ Get OAuth token
    const auth = Buffer.from(
      `${process.env.DARAJA_CONSUMER_KEY}:${process.env.DARAJA_CONSUMER_SECRET}`
    ).toString("base64");

    const tokenResponse = await axios.get(
      `${DARAJA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
      { headers: { Authorization: `Basic ${auth}` } }
    );

    const accessToken = tokenResponse.data.access_token;

    // 2️⃣ Build Password
    const timestamp = new Date()
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .slice(0, 14);
    const password = Buffer.from(
      `${process.env.DARAJA_SHORTCODE}${process.env.DARAJA_PASSKEY}${timestamp}`
    ).toString("base64");

    // 3️⃣ Send STK Push
    const stkResponse = await axios.post(
      `${DARAJA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
      {
        BusinessShortCode: process.env.DARAJA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.DARAJA_SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.DARAJA_CALLBACK_URL,
        AccountReference: "MUKESA",
        TransactionDesc: "Event Payment",
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.status(200).json({
      ResponseCode: "0",
      CustomerMessage: "STK Push initiated",
      data: stkResponse.data,
    });
  } catch (error: any) {
    console.error("Daraja error:", error.response?.data || error.message);
    res.status(500).json({
      ResponseCode: "1",
      errorMessage: "Payment initiation failed",
      details: error.response?.data,
    });
  }
}
