import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Text } from '@chakra-ui/react';
import Failure from './Failure';
import Success from './Success';
const Pay = () => {

	const [amt , setamt ] = useState(0)
	const [html , sethtml ] = useState()
	
	const handle_payments=()=>{
		let user = JSON.parse(sessionStorage.getItem("userdetails"))
		
		
		// // let data =
		// // {
		// // 	"merchantId": process.env.REACT_APP_merchantId,
		// // 	"merchantTransactionId": "MT7850590068188104",
		// // 	"merchantUserId": user?._id,
		// // 	"amount": amt,
		// // 	"redirectUrl": "https://valentinesaga.com/orders",
		// // 	"redirectMode": "POST",
		// // 	"callbackUrl": "https://webhook.site/callback-url",
		// // 	"paymentInstrument": {
		// // 	  "type": "PAY_PAGE"
		// // 	}
		// //   }
		
		// let data ={
		// 	"merchantId": "MERCHANTUAT",
		// 	"merchantTransactionId": Date.now(),
		// 	"merchantUserId": user?._id,
		// 	"amount": 10000,
		// 	"redirectUrl": "https://valentinesaga.com/orders",
		// 	"redirectMode": "POST",
		// 	"callbackUrl": "https://webhook.site/callback-url",
		// 	"mobileNumber": "9999999991",
		// 	"paymentInstrument": {
		// 	  "type": "PAY_PAGE"
		// 	}
		//   }
		// MERCHANTUAT
		let data ={
			"merchantId": "VALENTINEONLINE",
			"merchantTransactionId": `${Date.now()}`,
			"merchantUserId": `${user?._id}`,
			"amount": 10,
			"redirectUrl": "https://webhook.site/redirect-url",
			"redirectMode": "POST",
			"callbackUrl": "https://webhook.site/callback-url",
			"mobileNumber": "9999999999",
			"paymentInstrument": {
			  "type": "PAY_PAGE"
			}
		  }
		//   // axios.post(`${process.env.REACT_APP_Backend_url}/pay/phonepay`).then((res)=>{
			  axios.post(`${process.env.REACT_APP_dev_url}/pay/phonepay`,data).then((res)=>{
				  	window.open(res?.data?.data?.instrumentResponse?.redirectInfo.url)
				  	console.log(res)
				  
				  }).catch((err)=>{
					console.log(err.message)
				  })
		// axios.get(`${process.env.REACT_APP_Backend_url}/payment`).then((res)=>{
		// 	sethtml(`${res.data}`)
		// 	console.log(res.data)
		// })
				}
				useEffect(()=>{
		         let user =JSON.parse(sessionStorage.getItem("userdetails")) 

					axios.get(`${process.env.REACT_APP_Backend_url}/total/${user?._id}`).then((res)=>{
						
						setamt(res?.data?.data[0]?.total)
						console.log(res?.data?.data[0]?.total)
						})
				},[])

	return (
		<>
		<div style={{ width: "100%" }}>
	{/* <Success /> */}
				<Text size="4" color="blue" textAlign={"center"} marginBottom={"20px"}><b>
					
					<img style={{height:"100px",display:"block",margin:"auto"}} src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="" />
					</b> 
					 </Text>
		<Text textAlign={"center"}>Coming Soon...</Text>
			<Button isDisabled={true} bg={"green"} color={"white"} _hover={{color:"black"}} onClick={handle_payments}>{`Pay Now ₹${amt}`}</Button>
			<Text size="4" color="blue" textAlign={"center"} marginTop={"20px"}><b>
					or
					</b> 
					 </Text>
		</div>
		
		</>
	)
}

export default Pay