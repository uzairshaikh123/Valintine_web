import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './paycc.css'
const Paywithcc = () => {
	let user =JSON.parse(sessionStorage.getItem("userdetails")) 
	const [amt , setamt ] = useState(0)
const handleSubmit =  (e) => {
e.preventDefault()
// 	const merchant_id=document.querySelector("#merchant_id").value
// 	const order_id=document.querySelector("#order_id").value
// 	const currency=document.querySelector("#currency").value
// 	const amount=document.querySelector("#amount").value
// 	const redirect_url=document.querySelector("#redirect_url").value
// 	const cancel_url=document.querySelector("#cancel_url").value
// 	const language=document.querySelector("#language").value

// let obj ={
// 	merchant_id,
// order_id,
// currency,
// amount,
// redirect_url,
// cancel_url,
// language,
// }
// console.log(obj)
// let data = JSON.stringify(obj)
const obj ={}

 axios.post(`${process.env.REACT_APP_Backend_url}/ccavRequestHandler`, obj).then((res)=>{
	JSON.parse(res.data)
	window.location(res?.data?.action)
}).catch((err)=>{
     console.log(err.message,"error: " + err)
})
// action={`${process.env.REACT_APP_Backend_url}/ccavRequestHandler`}

}
let address = JSON.parse(sessionStorage.getItem("address"))  || {houseno:"",street:"",city:"",state:"",postalcode:"",mobileno:""}
useEffect(()=>{
	let user =JSON.parse(sessionStorage.getItem("userdetails")) 

	   axios.get(`${process.env.REACT_APP_Backend_url}/total/${user?._id}`).then((res)=>{
		   
		   setamt(res?.data?.data[0]?.total)
		   console.log(res?.data?.data[0]?.total)
		   })
		   
		   
   },[])



  return (
    <div>
		
      <form method="POST" name="customerData" action={`${process.env.REACT_APP_Backend_url}/ccavRequestHandler`}>
		<table width="40%"  border='1' align="center">
			<caption>
				<font size="4" color="blue"><b> <img style={{height:"70px"}} src="https://www.gccsl.in/website/images/ccavenue.png" alt="" /></b></font>
			</caption>
		</table>
		<table width="40%"  border='1' align="center">
			<tr className='cctr'>
				<td>Parameter Name:</td>
				<td>Parameter Value:</td>
			</tr>
			<tr className='cctr'>
				<td colspan="2">Compulsory information</td>
			</tr>
			<tr className='cctr'>
				<td>Merchant Id</td>
				<td><input type="text" name="merchant_id" id="merchant_id" value={`2625348`} /> </td>
			</tr>
			<tr className='cctr'>
				<td>Order Id</td>
				<td><input type="text" name="order_id" value={Date.now()} /></td>
			</tr>
			<tr className='cctr'>
				<td>Currency</td>
				<td><input type="text" name="currency" value="INR" /></td>
			</tr>
			<tr className='cctr'>
				<td>Amount</td>
				<td><input type="text" name="amount" value={`${amt}`} /></td>
			</tr>
			<tr className='cctr'>
				<td>Redirect URL</td>
				<td><input type="text" name="redirect_url"
					value="https://valentinesaga.com/orders" />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Cancel URL</td>
				<td><input type="text" name="cancel_url"
					value={`${process.env.REACT_APP_Backend_url}/ccavResponseHandler`} />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Language</td>
				<td><input type="text" name="language" id="language" value="EN" /></td>
			</tr>
			<tr className='cctr'>
				<td colspan="2">Billing information(optional):</td>
			</tr>
			<tr className='cctr'>
				<td>Billing Name</td>
				<td><input type="text" name="billing_name" value={user?.name} /></td>
			</tr>
			<tr className='cctr'>
				<td>Billing Address:</td>
				<td><input type="text" name="billing_address"
					value={`${""}`}  /></td>
			</tr>
			<tr className='cctr'>
				<td>Billing City:{address?.city}</td>
				<td><input type="text" name="billing_city" value={`${address?.city}`}  /></td>
			</tr>
			{/* ['C-3/7 ', ' garima garden', 'Irshad Garden ', ' Ghaziabad ', ' Uttar pradesh ', ' 201005'] */}
			<tr className='cctr'>
				<td>Billing State:{address?.state}</td>
				<td><input type="text" name="billing_state" value={`${address?.state}`}  /></td>
			</tr>
			<tr className='cctr'>
				<td>Billing Zip:{address?.postalcode}</td>
				<td><input type="text"  name="billing_zip" value={`${address?.postalcode}`} /></td>
			</tr>
			<tr className='cctr'>
				<td>Billing Country:India</td>
				<td><input type="text" name="billing_country" value="India" />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Billing Tel:</td>
				<td><input type="text" name="billing_tel" value={`${address?.mobileno}`} />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Billing Email:</td>
				<td><input type="text" name="billing_email"
					value={user?.email} /></td>
			</tr>
			<tr className='cctr'>
				<td colspan="2">Shipping information(optional):</td>
			</tr>
			<tr className='cctr'>
				<td>Shipping Name</td>
				<td><input type="text" name="delivery_name" value="Sam" />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Shipping Address:</td>
				<td><input type="text" name="delivery_address"
					value="Vile Parle" /></td>
			</tr>
			<tr className='cctr'>
				<td>Shipping City:</td>
				<td><input type="text" name="delivery_city" value={`${address?.city}`} />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Shipping State:</td>
				<td><input type="text" name="delivery_state" value={`${address?.state}`} />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Shipping Zip:</td>
				<td><input type="text" name="delivery_zip" value="400038" /></td>
			</tr>
			<tr className='cctr'>
				<td>Shipping Country:</td>
				<td><input type="text" name="delivery_country" value="India" />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Shipping Tel:</td>
				<td><input type="text" name="delivery_tel" value="0123456789" />
				</td>
			</tr>
			<tr className='cctr'>
				<td>Merchant Param1</td>
				<td><input type="text" name="merchant_param1"
					value="additional Info." /></td>
			</tr>
			<tr className='cctr'>
				<td>Merchant Param2</td>
				<td><input type="text" name="merchant_param2"
					value="additional Info." /></td>
			</tr>
			<tr className='cctr'>
				<td>Merchant Param3</td>
				<td><input type="text" name="merchant_param3"
					value="additional Info." /></td>
			</tr>
			<tr className='cctr'>
				<td>Merchant Param4</td>
				<td><input type="text" name="merchant_param4"
					value="additional Info." /></td>
			</tr>
			<tr className='cctr'>
				<td>Merchant Param5</td>
				<td><input type="text" name="merchant_param5"
					value="additional Info." /></td>
			</tr>
			<tr className='cctr'>
				<td>Promo Code:</td>
				<td><input type="text" name="promo_code" value=""/></td>
			</tr>
			<tr className='cctr'>
				<td>Customer Id:</td>
				<td><input type="text" name="customer_identifier" value=""/></td>
			</tr>
			<tr style={{border:"none"}}>
				{/* <td></td> */}
				<td style={{display:"block"}}><input type="submit" value={`Pay Now ₹${amt}`} /></td>
			</tr>
		</table>
	</form>
	{/* <form method="POST" name="customerData">
		<table width="40%" height="100" border='1' align="center">
			<caption>
				<font size="4" color="blue"><b>Integration Kit</b></font>
			</caption>
		</table>
		<table width="40%" height="100" border='1' align="center">
			<tr>
				<td>Parameter Name:</td>
				<td>Parameter Value:</td>
			</tr>
			<tr>
				<td colspan="2">Compulsory information</td>
			</tr>
			<tr>
				<td>Merchant Id</td>
				<td><input type="text"  name="merchant_id" id="merchant_id" value={process.env.REACT_APP_Merchant_ID} /> </td>
			</tr>
			<tr>
				<td>Order Id</td>
				<td><input type="text" id='order_id' name="order_id" value={`${Date.now()}`} /></td>
			</tr>
			<tr>
				<td>Currency</td>
				<td><input type="text" id='currency' name="currency" value="INR" /></td>
			</tr>
			<tr>
				<td>Amount</td>
				<td><input type="text" id='amount' name="amount" value="1.00" /></td>
			</tr>
			<tr>
				<td>Redirect URL</td>
				<td><input type="text" id='redirect_url' name="redirect_url"
					value="http://127.0.0.1:3001/ccavResponseHandler" />
				</td>
			</tr>
			<tr>
				<td>Cancel URL</td>
				<td><input type="text" id='cancel_url' name="cancel_url"
					value="http://127.0.0.1:3001/ccavResponseHandler" />
				</td>
			</tr>
			<tr>
				<td>Language</td>
				<td><input type="text" name="language" id="language" value="EN" /></td>
			</tr>
			<tr>
				<td colspan="2">Billing information(optional):</td>
			</tr>
			<tr>
				<td>Billing Name</td>
				<td><input type="text" name="billing_name" value="Peter" /></td>
			</tr>
			<tr>
				<td>Billing Address:</td>
				<td><input type="text" name="billing_address"
					value="Santacruz" /></td>
			</tr>
			<tr>
				<td>Billing City:</td>
				<td><input type="text" name="billing_city" value="Mumbai" /></td>
			</tr>
			<tr>
				<td>Billing State:</td>
				<td><input type="text" name="billing_state" value="MH" /></td>
			</tr>
			<tr>
				<td>Billing Zip:</td>
				<td><input type="text" name="billing_zip" value="400054" /></td>
			</tr>
			<tr>
				<td>Billing Country:</td>
				<td><input type="text" name="billing_country" value="India" />
				</td>
			</tr>
			<tr>
				<td>Billing Tel:</td>
				<td><input type="text" name="billing_tel" value="9876543210" />
				</td>
			</tr>
			<tr>
				<td>Billing Email:</td>
				<td><input type="text" name="billing_email"
					value="testing@domain.com" /></td>
			</tr>
			<tr>
				<td colspan="2">Shipping information(optional):</td>
			</tr>
			<tr>
				<td>Shipping Name</td>
				<td><input type="text" name="delivery_name" value="Sam" />
				</td>
			</tr>
			<tr>
				<td>Shipping Address:</td>
				<td><input type="text" name="delivery_address"
					value="Vile Parle" /></td>
			</tr>
			<tr>
				<td>Shipping City:</td>
				<td><input type="text" name="delivery_city" value="Mumbai" />
				</td>
			</tr>
			<tr>
				<td>Shipping State:</td>
				<td><input type="text" name="delivery_state" value="Maharashtra" />
				</td>
			</tr>
			<tr>
				<td>Shipping Zip:</td>
				<td><input type="text" name="delivery_zip" value="400038" /></td>
			</tr>
			<tr>
				<td>Shipping Country:</td>
				<td><input type="text" name="delivery_country" value="India" />
				</td>
			</tr>
			<tr>
				<td>Shipping Tel:</td>
				<td><input type="text" name="delivery_tel" value="0123456789" />
				</td>
			</tr>
			<tr>
				<td>Merchant Param1</td>
				<td><input type="text" name="merchant_param1"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param2</td>
				<td><input type="text" name="merchant_param2"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param3</td>
				<td><input type="text" name="merchant_param3"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param4</td>
				<td><input type="text" name="merchant_param4"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param5</td>
				<td><input type="text" name="merchant_param5"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Promo Code:</td>
				<td><input type="text" name="promo_code" value=""/></td>
			</tr>
			<tr>
				<td>Customer Id:</td>
				<td><input type="text" name="customer_identifier" value=""/></td>
			</tr>
			<tr>
				<td></td>
				<td><input onClick={handleSubmit} type="submit" value="Checkout" /></td>
			</tr>
		</table>
	</form> */}

    </div>
  )
}

export default Paywithcc
