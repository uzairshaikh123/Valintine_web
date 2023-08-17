const axios = require('axios');
const express = require('express');
const crypto = require('crypto');
const payrouter = express.Router()
require("dotenv").config()

payrouter.post("/phonepay",(req,res)=>{

  const payloadString = JSON.stringify(req.body);

  const hash = crypto.createHash('sha256').update(payloadString).digest('base64');
 
  // Formula: SHA256(Base64 encoded payload + "/pg/v1/pay" + salt key) + ### + salt index
  const checksum = hash + "/pg/v1/pay" + process.env.phonepaykey 
  let check=crypto.createHash('sha256').update(checksum).digest('base64')
  check = check + '###' + process.env.indexkey
  console.log(check)
  // res.send("end")
    const options = {
      method: 'POST',
      url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': check
      },
      data: {
        request: hash
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        // console.error(error);
        res.send(error)
      });
})

module.exports=payrouter

