import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { phone, amount } = req.body;
  if (!phone || !amount) {
    return res.status(400).json({ success: false, message: "Phone and amount required" });
  }

  try {
    // Step 1: Generate access token
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");

    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      { headers: { Authorization: `Basic ${auth}` } }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Prepare STK push payload
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, 14);
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");

    const payload = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: "https://mukesa.vercel.app/api/mpesa/callback",
      AccountReference: "MUKESA",
      TransactionDesc: "MUKESA Event Payment",
    };

    // Step 3: Make STK push request
    const stkResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    console.log("✅ M-PESA Response:", stkResponse.data);
    return res.status(200).json({ success: true, data: stkResponse.data });

  } catch (err) {
    console.error("❌ M-PESA Error:", err.response ? err.response.data : err.message);

    return res.status(500).json({
      success: false,
      message: "Payment initiation failed",
      error: err.response ? err.response.data : err.message,
    });
  }
}
