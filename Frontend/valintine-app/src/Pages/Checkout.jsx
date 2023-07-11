import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/checkout.css"
import Links from '../Components/HomeComponents/Links';
import AddressPage from './Shipping';
import Payment from '../Components/CheckoutComponents/Payment';

function Checkout() {
  
  return (
    <>
    <div  style={{background:"pink"}}>
      <h2 style={{borderBottom:"2px solid white",display:"inline"}}>Checkout</h2>
    <div className='checkout-cont'>
      <AddressPage/>
    
     
<Payment/>

      
    </div>
    </div>
    <Links/>
    </>
  );
}

export default Checkout;
