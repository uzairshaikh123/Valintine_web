import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/checkout.css"
import Links from '../Components/HomeComponents/Links';
import AddressPage from './Shipping';
import Payment from '../Components/CheckoutComponents/Payment';
import { useSelector } from 'react-redux';
import Phonepe from '../Components/CheckoutComponents/Phonepe';
import Pay from '../Components/CheckoutComponents/Pay';

function Checkout() {

const store = useSelector(store=>store)
const [show ,setshow]=useState(true)
const {loading,error,cart}=store
const user = JSON.parse(sessionStorage.getItem("userdetails"))
useEffect(()=>{

  if(user?.address){
    setshow(false)
    // console.log(user.address)
  }
},[])
const handleeditaddress=()=>{
  setshow(true)
}

const handlesavaddress=()=>{
  setshow(false)
}
  
   const total = sessionStorage.getItem("total_price")
  return (
    <>
    <div  style={{background:"#f7f9fc"}}>
      <h2 style={{borderBottom:"2px solid white",display:"inline"}}>Checkout</h2>
    {/* <div className='checkout-cont'>
      {show && <AddressPage handlesavaddress={handlesavaddress} />}
      {show===false && <div style={{OverflowY:"auto",minWidth:"50%",padding:"20px",margin:"auto",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"inherit",display:"flex",flexDirection:"column",alignItem:"center",borderRadius:"10px",justifyContent:"center",width:"40%",backgroundColor:"white",textAlign:"start"}} >
        <h3 style={{textAlign:"start"}}>Summary</h3>
        <h3 style={{textAlign:"start"}}>Name : {user.name}</h3>
        <h3 style={{textAlign:"start"}}>Total : {total}</h3>
        <h3 style={{textAlign:"start"}}>Address : {user.address}</h3>
        {cart.map((el)=>{
          return <p>Cart Items : {el.name}</p>
        })}
        <button onClick={handleeditaddress} style={{display:"block",margin:"auto",fontSize:"20px",cursor:"pointer",padding:"5px 20px",background:"blue",color:"white",border:"none",borderRadius:"10px"}}>Edit</button>
        </div>} */}
    
     
{/* <Payment/>
 */}
 {/* <Phonepe /> */}
 <Pay />

      
    {/* </div> */}
    </div>
    <Links/>
    </>
  );
}

export default Checkout;
