import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    // console.log(this.props.location.pathname);
    const location =  this.props.location.pathname
    return (
      <div className='container'>
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className='display-3'>404</h1>
              <h2><span className='text-danger'>{location}</span>, page not found</h2>
          </div>
        </div>
      </div>
    )
  }
}
