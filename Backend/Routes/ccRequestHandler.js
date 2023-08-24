var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccutils.js'),
    qs = require('querystring');
const crypto = require('crypto');
const express = require('express');
require("dotenv").config()
const ccRouter = express.Router()
// const nodeCCAvenue = require('node-ccavenue');



ccRouter.post("/", (request,response)=>{

    console.log("body",request.body)
    var body = request.body,
    merchant_id= process.env.Merchant_ID,
    working_key=process.env.Working_Key,			//Put in the Access Code shared by CCAvenues.
	encRequest = '',
	formbody = '';
				
    request.on('data', function (data) {
	body += data;
	encRequest = ccav.encrypt(body,working_key); 
	formbody = '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
    });
				
    request.on('end', function () {
    response.writeHeader(200, {"Content-Type": "text/html"});
	response.write(formbody);
	response.end();
    });
   return; 
    
})

module.exports = ccRouter




// var http = require('http'),
//     fs = require('fs'),
//     // ccav = require('./ccavutil.js'),
//     qs = require('querystring');
// const nodeCCAvenue = require('node-ccavenue');
// app.post('/ccavRequestHandler', function (request, response){
//     console.log(request.body)
//     const ccav = new nodeCCAvenue.Configure({
//         merchant_id: process.env.Merchant_ID,
//         working_key: process.env.Working_Key,
//     });
    
//     var body = request.body,	//Put in the 32-Bit key shared by CCAvenues.
//     accessCode = process.env.Access_key_cc,			//Put in the Access Code shared by CCAvenues.
// 	encRequest = '',
// 	formbody = '';
    
//     request.on('data', function (data) {
//         body += data;
//         encRequest = ccav.getEncryptedOrder(body);
        
//         formbody = '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
//     });
    
//     request.on('end', function () {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(formbody);
//         response.end();
//     });
//     return; 
// });
// };

