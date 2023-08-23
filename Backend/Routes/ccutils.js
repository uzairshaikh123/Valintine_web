// utils.js

/* payment gaetway encryption */
const crypto = require('crypto');
exports.node_encrypt_ccavenue_request = (payload) => {

  // parameter payload should be in string/stringify

   let key = process.env.Working_Key; // your working_key provided by bank


   const method = "aes-256-gcm";
   const initVector = crypto.randomBytes(16);
   const cipher = crypto.createCipheriv(method, key, initVector);
   let encrypted = cipher.update(payload, 'utf8', 'hex');
   encrypted += cipher.final('hex');
   const tag = cipher.getAuthTag().toString('hex');
   return initVector.toString('hex') + encrypted + tag;
}



/* payment gateway decryption */
exports.node_dencrypt_ccavenue_response = (encResp) => {

   // parameter encResp should be in string

   let key = "9E67B5672CD8204AE4C7571564C30779"; // your working_key provided by bank
   const method = "aes-256-gcm";
   const encryptedTextBuffer = Buffer.from(encResp, 'hex');
   const iv_len = 16;
   const tag_length = 16;
   const iv = encryptedTextBuffer.slice(0, iv_len);
   const tag = encryptedTextBuffer.slice(-tag_length);
   const ciphertext = encryptedTextBuffer.slice(iv_len, -tag_length);
   const decipher = crypto.createDecipheriv(method, key, iv);
   decipher.setAuthTag(tag);
   let decrypted = decipher.update(ciphertext, 'binary', 'utf8');
   decrypted += decipher.final('utf8');

   let data = qs.parse(decrypted);
   return data;
}