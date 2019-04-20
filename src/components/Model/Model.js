import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context/context'

import { ProductBtn, AddBtn } from '../Button/Button'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <ProductConsumer>
        {val => {
          const {modelOpen, closeModel} = val;
          const { img, title, price } = val.modelProduct
          if(!modelOpen){
            return false
          }
          else{
            return(
              <Modelcontainer>
                <div className="container">
                  <div className="row">
                    <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                      <h5>Item added to the Cart.</h5>
                      <img src={img} className='img-fluid' alt="avatar"/>
                      <h5>{title}</h5>
                      <h5 className='text-muted'>price : {price}</h5>
                      <Link to='/'>
                        <ProductBtn onClick={() => closeModel()}>Continue</ProductBtn>
                      </Link>
                      <Link to='/cart'>
                        <AddBtn onClick={() => closeModel()}>Go to cart</AddBtn>
                      </Link>
                    </div>  
                  </div>  
                </div>   
              </Modelcontainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const Modelcontainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
    background: var(--mainWhite)
  }
`