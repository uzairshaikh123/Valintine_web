var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccutils.js'),
    qs = require('querystring');

exports.postReq = function(request,response){
    console.log(request.body)
    var body = request.body
	const workingKey = process.env.Working_Key	//Put in the 32-Bit key shared by CCAvenues.
	const accessCode = process.env.Access_key_cc		//Put in the Access Code shared by CCAvenues.
	let encRequest = ''
	let formbody = '';
    
   
	encRequest = ccav.encrypt(qs.stringify(body)); 
    console.log(encRequest)
	formbody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';

		console.log(formbody)		  
   const d = ccav.decrypt(encRequest)
   console.log(d)
    //     response.writeHeader(200, {"Content-Type": "text/html"});
	// response.write(formbody);
    response.send(formbody)
    // response.render(formbody)
   return; 
};
