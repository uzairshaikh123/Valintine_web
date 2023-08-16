const axios = require('axios');
const express = require('express');
const crypto = require('crypto');
const payrouter = express.Router()


payrouter.get("/phonepay",(req,res)=>{

  const payloadString = JSON.stringify(req.body);

  const hash = crypto.createHash('sha256').update(payloadString).digest('base64');
  console.log(hash)
  
  res.send("end")
    // const options = {
    //   method: 'POST',
    //   url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
    //   headers: {
    //     accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-VERIFY': '2cd3a2cd04ff5b453df11e91f97b29fae10fe22522a29c1ae6b7fad41478d8b5###1'
    //   },
    //   data: {
    //     request: 'ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvcmVkaXJlY3QtdXJsIiwKICAicmVkaXJlY3RNb2RlIjogIlBPU1QiLAogICJjYWxsYmFja1VybCI6ICJodHRwczovL3dlYmhvb2suc2l0ZS9jYWxsYmFjay11cmwiLAogICJtb2JpbGVOdW1iZXIiOiAiOTk5OTk5OTk5OSIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9'
    //   }
    // };
    
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     res.send(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //     res.send(error)
    //   });
})

module.exports=payrouter

