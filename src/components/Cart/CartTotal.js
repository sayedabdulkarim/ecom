import React from 'react'
import { Link } from 'react-router-dom'

import Stripe from './Stripe'
import Paypal from './PayPal'

function CartTotal({val, history}) {
  // console.log(val)
  const { cartTotal, cartTax, cartSubTotal, clearCart } = val
  return <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                  <Link to='/'>
                    <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={() => clearCart()}>Clear Cart</button>
                  </Link>      
                  <h5>
                    <span className='text-title'>
                      SubTotal : Rs.
                    </span>
                    <strong>{cartSubTotal.toFixed(2)}</strong>
                  </h5>            
                  <h5>
                    <span className='text-title'>
                      Tax : Rs.
                    </span>
                    <strong>{cartTax.toFixed(2)}</strong>
                  </h5>            
                  <h5>
                    <span className='text-title'>
                      Total : Rs. 
                    </span>
                    <strong>{cartTotal.toFixed(2)}</strong>
                  </h5>
                  <Paypal total={cartTotal} clearCart={clearCart} history={history}/>           
                  <Stripe /> 
                </div>
              </div>
            </div>
        </React.Fragment>
}

export default CartTotal
