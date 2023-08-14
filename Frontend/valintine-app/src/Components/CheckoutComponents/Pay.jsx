import React from 'react'
import axios from 'axios';
import { Button } from '@chakra-ui/react';
const Pay = () => {
	// 7e3e98f0-9b56-4d76-a669-df0be0399253
	const body = {
		"merchantId": "VALENTINEONLINE",
		"merchantTransactionId": "MT7850590068188104",
		"merchantUserId": "MU933037302229373",
		"amount": 1,
		"callbackUrl": "https://webhook.site/callback-url",
		"mobileNumber": "9999999999",
		"deviceContext": {
		  "deviceOS": "ANDROID"
		},
		"paymentInstrument": {
		  "type": "UPI_INTENT",
		  "targetApp": "com.phonepe.app",
		  "accountConstraints": [{					//Optional. Required only for TPV Flow.
			  "accountNumber": "420200001892",
			  "ifsc": "ICIC0000041"
		  }]
		}
	  }
	  const handle_payments = ()=>{

		  axios.post('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',body)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	  }





  return (
    <div style={{width:"100%"}}>
		<Button onClick={handle_payments}>Pay</Button>
    </div>
  )
}

export default Pay