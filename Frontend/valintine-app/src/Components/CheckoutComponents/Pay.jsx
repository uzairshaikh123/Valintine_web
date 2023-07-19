import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [orderId, setOrderId] = useState('12345');
  const [amount, setAmount] = useState('1');
  const [currency, setCurrency] = useState('INR');

  const handleSubmit = async (e) => {
    // console.log(e);
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/payment/generatePaymentUrl', {
        order_id: orderId,
        amount,
        currency,
        redirect_url:'http://localhost:8080/orders',
        cancel_url:"http://localhost:8080/orders",
    

      });

      const paymentUrl = response.data.payment_url;
    //   Redirect to payment URL or open it in a new window
      window.open(paymentUrl, '_blank');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <form onSubmit={handleSubmit}>
        {/* ... input fields ... */}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
