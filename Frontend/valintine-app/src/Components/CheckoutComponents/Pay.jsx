import React from 'react'
import axios from 'axios';
import { Button } from '@chakra-ui/react';
const Pay = () => {

	const handle_payments=()=>{
		axios.post(`${process.env.REACT_APP_Backend_url}/pay/phonepay`).then((res)=>{
			window.open(res?.data?.data?.instrumentResponse?.redirectInfo.url)
			console.log(res.data.data)
				
		})
	}




	return (
		<div style={{ width: "100%" }}>
			<Button bg={"red"} color={"white"} _hover={{color:"black"}} onClick={handle_payments}>Proceed to Pay</Button>
		</div>
	)
}

export default Pay