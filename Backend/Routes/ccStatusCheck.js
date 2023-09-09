var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccutils.js'),
    crypto = require('crypto'),
    qs = require('querystring');
require("dotenv").config()
exports.check_order_status = async (payload) => {


    let payload = {
        order_no: payload.orderNo, // your order_no that you sent to payment gateway
    }

 let final_payload  = JSON.stringify(payload)
 encryptionResponseData = ccav.encrypt(final_payload);


    let ccave_payload = {
        command: 'orderStatusTracker',
        enc_request: encryptionResponseData,
        access_code: process.env.Access_key_cc, // your access code
        request_type: 'JSON',
        response_type: 'JSON',
        version: 1.1
    }
    const stringify_data = qs.stringify({
        ...ccave_payload
    });

    let ccave_response = {};
    try {
        // for production the base url could be different 
        let ccav_base_url = "https://apitest.ccavenue.com";
        ccave_response = await axios.post(`${ccav_base_url}/apis/servlet/DoWebTrans?${stringify_data}` , {}, {
        });
    } catch (err) {
        console.log('>>>>>>> axios order status api error >>>>>>>> ')
        console.log(err)
    }

    return ccave_response.data;
}