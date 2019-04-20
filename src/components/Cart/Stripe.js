import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';

 class Stripe extends Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_JOsrZcLWLk5QVY9yr81ijAxB00c3bR39YD"
      />
    )
  }
}

export default Stripe
