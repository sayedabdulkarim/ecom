import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ProductConsumer } from '../../context/context'
import PropTypes from 'prop-types'

class Product extends Component {
  state = {  }
  render() { 
    const { id, title, img, price, inCart } = this.props.product 
    return ( 
        <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'  key={id}>
          <div className="card" >
            <ProductConsumer>
              {val => {
                return(
                  <div className="img-container p-5" onClick={() => val.handleDetail(id)}>
                    <Link to='/details'>
                      <img src={img} alt="product" className='card-img-top'/>
                    </Link>
                    <button className='card-btn' disabled={inCart ? true: false } 
                      onClick={() => {
                        val.addTocart(id)
                        val.openModel(id)
                        }
                    }>
                    {inCart ? (<p className='text-capitalize mb-0' disabled>{""}in-Cart</p>) : (<i className='fas fa-cart-plus'/>)}
                    </button>
                  </div>
                )
              }}
            </ProductConsumer>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <p className='align-self-center mb-0'>{title}</p>
              <h6 className='text-pink font-italic mb-0'>
                <span className='mr-1'>Rs.</span>
                {price.toFixed(2)}
              </h6>
            </div>
          </div>
      </ProductWrapper>
     );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

 const ProductWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover{
    .card{
      // border: 0.04rem solid rgba(255,63,108, 0.5);
      box-shadow: 5px 5px 5px rgba(255,63,108, 0.5);
    }
    .card-footer{
      background: rgba(247, 247, 247)
    }
  }
  .img-container{ 
    position: relative;
    overflow: hidden;
  }
  .card-img-top:hover{
    transition: all 1s linear;    
    transform: scale(1.2)
  }
  .card-btn{
    position: absolute;
    bottom : 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainSky);
    border: none;
    color: var(--mainPink);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%)
  }
  .img-container:hover .card-btn{
    transform: translate(0, 0);
    transition: all 1s ease-in-out
  }
  .card-btn:hover{
    color: var(--mainSky);
    background-color: var(--mainPink)
  }
 `
export default Product;
