const axios = require('axios');
const express = require('express');
const crypto = require('crypto');
const payrouter = express.Router();
var nodeBase64 = require('nodejs-base64-converter');
require("dotenv").config()

payrouter.post("/phonepay",(req,res)=>{
  
  let objstr = btoa(JSON.stringify(req.body,null,2))
  
<<<<<<< HEAD
  let check = objstr + "/pg/v1/pay" + process.env.phonepaykey
=======
  let check = objstr +"/pg/v1/pay"+ process.env.phonepaykey
>>>>>>> 40e40f98a0a81e4c1542ecda4703287ab7139701
  var hash = crypto.createHash('sha256');
  let originalValue = hash.update(check, 'utf-8');
  let hashValue = originalValue.digest('hex');  
let checksum = hashValue +"###" + 1
console.log(objstr, "checksum" , checksum )
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

