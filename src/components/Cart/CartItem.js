import React from 'react'

export default function CartItem({item , val}) {
  const { id, title, img, price, total, count } = item
  const { increment, decrement, removeItem } = val

  return (
    <div className='row my-3 text-capitalize text-center d-flex align-items-center'>
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{width: '5rem', height: '5rem'}} className='img-fluid' alt="item"/>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-one"></span> {title}        
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-one"></span> Rs. {price}.00        
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
            <div>
              <span className='btn btn-black mx-1' onClick={() => decrement(id)}> - </span>
              <span className='btn btn-black mx-1'> {count} </span>
              <span className='btn btn-black mx-1' onClick={() => increment(id)}> + </span>
            </div>
        </div>
      </div>
{/* /////////////// */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : Rs. {total}.00</strong>
      </div>
    
    </div>
  )
}
