var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccutils.js'),
    qs = require('querystring');
require("dotenv").config();

exports.postReq = function(request,response){
    console.log("body line 7",request.body)
    var body = request.body,
	workingKey = process.env.Working_Key,	//Put in the 32-Bit key shared by CCAvenues.
	accessCode = process.env.Access_key_cc,			//Put in the Access Code shared by CCAvenues.
	encRequest = '',
	formbody = '';
				
    request.on('data', function (data) {
	body += data;
	encRequest = ccav.encrypt(body,workingKey); 
	formbody = '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
    });
				
    request.on('end', function () {
    response.writeHeader(200, {"Content-Type": "text/html"});
	response.write(formbody);
	response.end();
    });
   return; 
};
