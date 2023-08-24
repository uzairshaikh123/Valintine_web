var http = require('http'),
    fs = require('fs'),
    ccav2 = require('./ccutils.js'),
    qs = require('querystring');
const crypto = require('crypto');
const express = require('express');
require("dotenv").config()
const ccRouter = express.Router()
const nodeCCAvenue = require('node-ccavenue');


const ccav = new nodeCCAvenue.Configure({
  merchant_id: process.env.Merchant_ID,
  working_key: process.env.Working_Key,
});

ccRouter.post("/", (request,response)=>{

    console.log("body",request.body)
    
    var encRequest = crypto.createHash('sha256').update(JSON.stringify(request.body)).digest('hex');
    var body = JSON.stringify(request.body),
    workingKey = process.env.Working_Key,	//Put in the 32-Bit key shared by CCAvenues.
    accessCode = process.env.Access_key_cc,			//Put in the Access Code shared by CCAvenues.
    formbody = '';
    
    console.log(encRequest)
    // request.on('data', function () {
        const encRequest = ccav.getEncryptedOrder(body);
        // data+=body
        // encRequest = ccav.node_encrypt_ccavenue_request(body,workingKey); 
    formbody = '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
    // });
                
    response.send(formbody);
    // request.on('end', function () {
    // });
    return; 
})

module.exports = ccRouter
