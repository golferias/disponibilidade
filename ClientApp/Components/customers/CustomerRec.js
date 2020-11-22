import React, { Component } from 'react'

export default class CustomerRec extends Component {
  render () {
    return (
      <div className='events-customers-list__item row'>
        <div className='item col-12 col-sm-6 col-md-5 '>
          <div className='customer-title'>{this.props.customer.Name}</div>
          <div className='customer-details'>
            <i>&nbsp;&nbsp; Email: </i> {this.props.customer.Email}
          </div>
          <div className='customer-details'>
            <i>&nbsp;&nbsp;Phone: </i>
            {this.props.customer.Phone}
          </div>
        </div>
      </div>
    )
  }
}
