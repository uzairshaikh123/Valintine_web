const express = require('express');
const bodyParser = require('body-parser');
const nodeCCAvenue = require('node-ccavenue');
const axios = require('axios')
const PaymentRouter = express();
// const port = process.env.PORT || 5000;

const ccav = new nodeCCAvenue.Configure({
  merchant_id: process.env.test_merchant_id,
access_code: process.env.Access_Code,
  working_key: process.env.test_working_key,
  redirect_url: 'http://localhost:3000/orders' // URL for CCAvenue response redirection (e.g., http://localhost:5000/ccavResponseHandler)
});

PaymentRouter.use(bodyParser.urlencoded({ extended: true }));
PaymentRouter.use(bodyParser.json());
// console.log(process.env.test_merchant_id);
PaymentRouter.post('/generatePaymentUrl', async (req, res) => {
  const { order_id, amount, currency ,redirect_url,cancel_url} = req.body;

  const orderParams = {
    order_id,
    amount,
    currency,
    redirect_url// Set the redirect_url here for this specific request
  };

  const encryptedParams = ccav.getEncryptedOrder(orderParams);
  const paymentUrl = await axios.post(
    'https://test.ccavenue.com/transaction/transaction.do',
    orderParams
    )
    console.log("respp",paymentUrl.data);

  // res.json({ payment_url: paymentUrl });
});

PaymentRouter.post('/ccavResponseHandler', (req, res) => {
  const { encResp } = req.body;
  const response = ccav.redirectResponseToJson(encResp);

  // Handle the response and update your database, show a success/failure message to the user, etc.
  res.send("");
});

module.exports = PaymentRouter;


