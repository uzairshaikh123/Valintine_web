const axios = require('axios');
const express = require('express');
const crypto = require('crypto');
const payrouter = express.Router();
var nodeBase64 = require('nodejs-base64-converter');

require("dotenv").config()
payrouter.post("/phonepay",(req,res)=>{
  
  let objstr = btoa(JSON.stringify(req.body,null,2))
  
  let check = objstr +"/pg/v1/pay"+"099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"
  var hash = crypto.createHash('sha256');
  let originalValue = hash.update(check, 'utf-8');
  let hashValue= originalValue.digest('hex');  
let checksum = hashValue+"###" + process.env.indexkey

    const options = {
      method: 'POST',
      url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: 
        {
          "request":objstr
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

