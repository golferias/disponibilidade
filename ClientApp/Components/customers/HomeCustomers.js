import React, { Component } from 'react'
import CustomerRec from './CustomerRec'

class HomeCustomers extends Component {
  render () {
    const customerItemComponents = this.props.customers.map(customerRec => {
      return <CustomerRec key={customerRec.Id} customer={customerRec} />
    })

    return (
      <div className='events-customers-list container-fluid js-list-view active'>
        {customerItemComponents}
      </div>
    )
  }
}

export default HomeCustomers
