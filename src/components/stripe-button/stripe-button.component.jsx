import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'ppk_test_51Ix3DWSBuifiQ5AGLS8uRAmKRzatqe0rYFYpgp698TuAhUYqV7ZhSTJkfPpQR494Ke0RiVUobtjXZaQZwYc91D3P00I4ggkCve';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
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