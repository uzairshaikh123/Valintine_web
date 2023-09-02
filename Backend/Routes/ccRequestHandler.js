// var http = require('http'),
//     fs = require('fs'),
//     ccav = require('./ccutils.js'),
//     qs = require('querystring');

// exports.postReq = function(request,response){
//     console.log(request.body)
//     var body = request.body
// 	const workingKey = process.env.Working_Key	//Put in the 32-Bit key shared by CCAvenues.
// 	const accessCode = process.env.Access_key_cc		//Put in the Access Code shared by CCAvenues.
// 	let encRequest = ''
// 	let formbody = '';
    
   
// 	encRequest = ccav.encrypt(qs.stringify(body)); 
//     console.log(encRequest)
// 	formbody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';

// 		console.log(formbody)		  
//    const d = ccav.decrypt(encRequest)
//    console.log(d)
//     //     response.writeHeader(200, {"Content-Type": "text/html"});
// 	// response.write(formbody);
//     response.send(formbody)
//     // response.render(formbody)
//    return; 
// };

// PaymentController.js
// const qs = require('qs');
// const utils = require('./utils');
// const { encrypt } = require('./ccutils');

//encrypt request
// exports.ccav_request_handler = async function (req, res) {
// console.log(req.body)
    // const {
    //     merchant_id = '2625348', // your merchant id provided by bank
    //     order_id = Date.now(), // uniuqe order_no
    //     currency = "USD", // or any supported currency
    //     amount,
    //     redirect_url = 'https://your_domain.com/ccavResponseHandler', // any route name that where ccaveneue response hit back to sever
    //     cancel_url = 'https://your_domain.com/ccavResponseHandler',//any route name that where ccaveneue response hit back to sever
    //     merchant_param1, // extra information can be send in these params you are not allowed to use any other custom field
    //     merchant_param2,
    //     merchant_param3,
    //     merchant_param4,
    //     merchant_param5,
    //     promo_code,
    //     customer_identifier, // to save card info on payment gateway side
    // } = req.body;
    // URL:http://www.localhost:8080
   
//         const stringify_payload = qs.stringify({
//             ...req.body
//         })

//         const encryptionResponseData = encrypt(stringify_payload,"20E79D02B32042518F62A20204A120B5");

//         res.render("payment", {
//             encryptedData: encryptionResponseData,
//             access_code: 'AVNN05KI16AD13NNDA', // your access_code provided by bank
//         });

// }



// cc



var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccutils.js'),
    crypto = require('crypto'),
    qs = require('querystring');

exports.postReq = function(request,response){
  
    // const {
    //         merchant_id = '2625348', // your merchant id provided by bank
    //         order_id = Date.now(), // uniuqe order_no
    //         currency = "USD", // or any supported currency
    //         amount,
    //         redirect_url = 'https://your_domain.com/ccavResponseHandler', // any route name that where ccaveneue response hit back to sever
    //         cancel_url = 'https://your_domain.com/ccavResponseHandler',//any route name that where ccaveneue response hit back to sever
    //         merchant_param1, // extra information can be send in these params you are not allowed to use any other custom field
    //         merchant_param2,
    //         merchant_param3,
    //         merchant_param4,
    //         merchant_param5,
    //         promo_code,
    //         customer_identifier, // to save card info on payment gateway side
    //     } = req.body;
    //Generate Md5 hash for the key and then convert in base64 string
    var md5 = crypto.createHash('md5').update(process.env.Working_Key).digest();
    var keyBase64 = Buffer.from(md5).toString('base64');
    
    //Initializing Vector and then convert in base64 string
    var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,0x0e, 0x0f]).toString('base64');
    // let enc=(ccav.encrypt(JSON.stringify(body), keyBase64, ivBase64))
    // console.log("dcrypt",ccav.decrypt(JSON.stringify(enc), keyBase64, ivBase64))

    // request.on('data', function (data) {
	// body += data;
	// encRequest = ccav.encrypt(body, keyBase64, ivBase64); 
	// formbody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
    // console.log(formbody)
    // });
				
    // request.on('end', function () {
    //     response.writeHeader(200, {"Content-Type": "text/html"});
	// response.write(formbody);
	// response.end();
    // });
    console.log(request.body)

    const stringify_payload = qs.stringify({
                    ...request.body
                })
                console.log(stringify_payload)
        
                const encryptionResponseData = ccav.encrypt(stringify_payload, keyBase64, ivBase64);
        
    response.render("payment", {
                    encryptedData: encryptionResponseData,
                    access_code: process.env.Access_key_cc, // your access_code provided by bank
                });
   return; 
};


// AVNN05KI16AD13NNDA