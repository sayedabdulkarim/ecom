import React, { Component } from 'react'
import Title from '../ProductList/Title'

import { ProductConsumer } from '../context/context'

import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {val => {
            const { cart } = val
            
            if(cart.length > 0){
              return(
                <>
                  <Title name='your' title='cart'/>
                  <CartColumn />
                  <CartList val={val}/>
                  <CartTotal val={val} history={this.props.history}/>
                </>
              )
            }
            else{
              return(
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
