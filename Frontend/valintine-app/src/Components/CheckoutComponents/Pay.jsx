import React from 'react'
import axios from 'axios';
import { Button } from '@chakra-ui/react';
const Pay = () => {

	const handle_payments=()=>{
		axios.post(`${process.env.REACT_APP_Backend_url}/pay/phonepay`).then((res)=>{
			console.log(res)
		})
		// phonepay
	}




	return (
		<div style={{ width: "100%" }}>
			<Button onClick={handle_payments}>Pay Button</Button>
		</div>
	)
}

export default Pay