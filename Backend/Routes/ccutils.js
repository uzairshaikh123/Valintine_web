// // utils.js
// const crypto = require('crypto');
// /* payment gaetway encryption */
// require("dotenv").config()
// var qs = require('qs');

// exports.encrypt = (payload) => {

// 	// parameter payload should be in string/stringify
 
// 	 let key = '20E79D02B32042518F62A20204A120B5'; // your working_key provided by bank
 
 
// 	 const method = "aes-256-gcm";
// 	 const initVector = crypto.randomBytes(16);
// 	 const cipher = crypto.createCipheriv(method, key, initVector);
// 	 let encrypted = cipher.update(payload, 'utf8', 'hex');
// 	 encrypted += cipher.final('hex');
// 	 const tag = cipher.getAuthTag().toString('hex');
// 	 return initVector.toString('hex') + encrypted + tag;
//  }
 
 
 
//  /* payment gateway decryption */
//  exports.decrypt = (encResp) => {
 
// 	 // parameter encResp should be in string
 
// 	 let key = "20E79D02B32042518F62A20204A120B5"; // your working_key provided by bank
// 	 const method = "aes-256-gcm";
// 	 const encryptedTextBuffer = Buffer.from(encResp, 'hex');
// 	 const iv_len = 16;
// 	 const tag_length = 16;
// 	 const iv = encryptedTextBuffer.slice(0, iv_len);
// 	 const tag = encryptedTextBuffer.slice(-tag_length);
// 	 const ciphertext = encryptedTextBuffer.slice(iv_len, -tag_length);
// 	 const decipher = crypto.createDecipheriv(method, key, iv);
// 	 decipher.setAuthTag(tag);
// 	 let decrypted = decipher.update(ciphertext, 'binary', 'utf8');
// 	 decrypted += decipher.final('utf8');
 
// 	 let data = qs.parse(decrypted);
// 	 return data;
//  }




// cc

var crypto = require('crypto');
function getAlgorithm(keyBase64) {
    var key = Buffer.from(keyBase64, 'base64');
    switch (key.length) {
        case 16:
            return 'aes-128-cbc';
        case 32:
            return 'aes-256-cbc';

    }
    throw new Error('Invalid key length: ' + key.length);
}

exports.encrypt = function(plainText, keyBase64, ivBase64) {

    const key = Buffer.from(keyBase64, 'base64');
    const iv = Buffer.from(ivBase64, 'base64');

    const cipher = crypto.createCipheriv(getAlgorithm(keyBase64), key, iv);
    let encrypted = cipher.update(plainText, 'utf8', 'hex')
    encrypted += cipher.final('hex');
    return encrypted;
}

exports.decrypt = function(messagebase64, keyBase64, ivBase64) {

    const key = Buffer.from(keyBase64, 'base64');
    const iv = Buffer.from(ivBase64, 'base64');

    const decipher = crypto.createDecipheriv(getAlgorithm(keyBase64), key, iv);
    let decrypted = decipher.update(messagebase64, 'hex');
    decrypted += decipher.final();
    return decrypted;
}
