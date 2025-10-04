import axios from "axios";

export default async function handler(req, res) {
  console.log("🚀 /api/mpesa/stkpush endpoint hit");

  if (req.method !== "POST") {
    console.log("❌ Invalid request method:", req.method);
    return res.status(405).json({error: "Method not allowed"});
  }

  try {
    const {phone, amount} = req.body;
    console.log("📦 Received body:", req.body);

    if (!phone || !amount) {
      console.log("⚠️ Missing phone or amount");
      return res.status(400).json({error: "Missing phone or amount"});
    }

    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    const callbackURL = "https://mukesa.vercel.app/api/mpesa/callback";

    console.log("🔑 Fetching access token...");
    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {auth: {username: consumerKey, password: consumerSecret}}
    );

    const accessToken = tokenResponse.data.access_token;
    console.log("✅ Access token received:", accessToken ? "Yes" : "No");

    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, 14);
    const password = Buffer.from(shortcode + passkey + timestamp).toString("base64");

    const payload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: callbackURL,
      AccountReference: "MUKESA",
      TransactionDesc: "Event Payment",
    };

    console.log("📤 Sending STK Push request with payload:", payload);

    const stkResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      {headers: {Authorization: `Bearer ${accessToken}`}}
    );

    console.log("✅ STK push response:", stkResponse.data);

    res.status(200).json({success: true, data: stkResponse.data});
  } catch (error) {
    console.error("❌ STK push error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Payment initiation failed",
      error: error.response?.data || error.message,
    });
  }
}
