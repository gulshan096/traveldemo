import React, { useState } from 'react';
import axios from 'axios';


const RazorpayPayment = () => {
    const [amount, setAmount] = useState(100);

  const handlePayment = async () => {
    try {
      // Create order on the Laravel backend
      const response = await axios.post('http://127.0.0.1:8000/api/createOrder', { amount });

      const { data } = response;

      const options = {
        key: 'rzp_test_zF2WN9CPbM9IaS',
        amount: data.amount * 100,
        currency: data.currency,
        order_id: data.id,
        name: 'ABCD Private Limited',
        description: 'Payment for services',
        image: 'http://localhost:3001/images/logo.png',
        handler: function (response) {
          // Handle the payment success on the frontend
          console.log(response);
          // Make a request to your Laravel backend to handle payment callback
          axios.post('http://127.0.0.1:8000/api/paymentCallback', response);
        },
        prefill: {
          name: 'Gulshan Kumar Patel',
          email: 'customer@example.com',
          contact: '1234567890',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <button className='btn btn-outline-primary fs-5 mt-3' onClick={handlePayment}>Proceed to Pay</button>
   </>

  )
}

export default RazorpayPayment