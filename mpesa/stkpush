import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/mpesa/stkpush", async (req, res) => {
  const { phoneNumber, amount } = req.body;

  try {
    // 1️⃣ Get access token
    const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString("base64");
    const tokenResponse = await axios.get(
      `${process.env.MPESA_ENV === "production"
        ? "https://api.safaricom.co.ke"
        : "https://sandbox.safaricom.co.ke"
      }/oauth/v1/generate?grant_type=client_credentials`,
      { headers: { Authorization: `Basic ${auth}` } }
    );

    const access_token = tokenResponse.data.access_token;

    // 2️⃣ Prepare STK push data
    const timestamp = new Date().toISOString().replace(/[-T:\.Z]/g, "").slice(0, 14);
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString("base64");

    const stkData = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber.replace(/^0/, "254"),
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber.replace(/^0/, "254"),
      CallBackURL: "https://mukesa.vercel.app/mpesa/callback",
      AccountReference: "MUKESAPICNIC",
      TransactionDesc: "MUKESA Picnic Ticket Payment",
    };

    // 3️⃣ Send STK push request
    const stkResponse = await axios.post(
      `${process.env.MPESA_ENV === "production"
        ? "https://api.safaricom.co.ke"
        : "https://sandbox.safaricom.co.ke"
      }/mpesa/stkpush/v1/processrequest`,
      stkData,
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    res.json(stkResponse.data);

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || "Internal Server Error" });
  }
});

app.post("/mpesa/callback", (req, res) => {
  console.log("M-Pesa Callback:", req.body);
  res.status(200).send("Callback received");
});

app.listen(5000, () => console.log("🚀 M-Pesa backend running on port 5000"));
