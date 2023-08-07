import React, { useState } from 'react';
import axios from 'axios';

function Phonepe() {
    const [paymentUrl, setPaymentUrl] = useState('');

    const initiatePayment = async () => {
        console.log('click')
        try {
            const response = await axios.post(
                'https://mercury-uat.phonepe.com/v4/debit',
                {
                    "merchantId": "VALENTINEONLINE",
                    "transactionId": "TX123456789",
                    //"merchantUserId":"U123456789",
                    "amount": 1,
                    // Your payment details here
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ',
                    },
                }
            );
            setPaymentUrl(response.data.redirectUrl);
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <div>
            <h1>PhonePe Payment Integration</h1>
            <button onClick={initiatePayment}>Initiate Payment</button>
            {paymentUrl && <a href={paymentUrl}>Proceed to Payment</a>}
        </div>
    );
}

export default Phonepe;
