import React, { Component } from 'react'
// import styled from 'styled-components'

import { ProductConsumer } from '../context/context'
import { Link } from 'react-router-dom'
import { ProductWrapper, ProductBtn, AddBtn } from '../Button/Button'

export default class Details extends Component {
  
  // componentDidMount() {
  //   return(
  //     <ProductConsumer>
  //       {(val) => {
  //         console.log(val)
  //       }}
  //     </ProductConsumer>
  //   )
  // }
  
  render() {
    return (
      <ProductConsumer>
        {(val) => {
            const {id, company, img, info, price, title, inCart } = val.detailProduct
            return(
              <div className="container py-5">
                {/* ////// */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted my-5">
                    <ProductWrapper><h1 className='pink'>{title}</h1></ProductWrapper>
                  </div>
                </div>
                {/* ////////// */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className='img-fluid' alt="product"/>
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Model : {title}</h2>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      made by : <span className='text-uppercase'>{company}</span>
                    </h4>
                    <ProductWrapper><h4 className='pink'><strong>price : <span>{price}</span></strong></h4></ProductWrapper>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                      some info about the products:
                    </p>
                    <p className='text-muted lead'>{info}</p>
                    {/*buttons*/}
                    <div>
                       <Link to='/'>
                          <ProductBtn className=''>back to products</ProductBtn>
                       </Link>
                       <AddBtn disabled={inCart ? true: false} onClick={() => {val.addTocart(id); val.openModel(id)}}>{inCart ? 'inCart' : 'add to cart'}</AddBtn>
                    </div>
                  </div>
                </div>

              </div>
            )
          }}
      </ProductConsumer>
    )
  }
}
