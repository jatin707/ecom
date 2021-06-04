import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Ix3DWSBuifiQ5AGLS8uRAmKRzatqe0rYFYpgp698TuAhUYqV7ZhSTJkfPpQR494Ke0RiVUobtjXZaQZwYc91D3P00I4ggkCve';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(() => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Keto Food Ltd.'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/P6bMZZ7/logo-1.png'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      currency="INR"
      panelLabel='Pay Now'
      bitcoin
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;