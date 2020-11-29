import React, { Component } from 'react'
import CustomerRec from './CustomerRec'

class HomeCustomers extends Component {
  deleteCustomer = customer => {
    return this.props.deleteCustomer(customer)
  }

  render () {
    const customerItemComponents = this.props.customers.map(customerRec => {
      return (
        <CustomerRec
          key={customerRec.id}
          customer={customerRec}
          deleteCustomer={customer => {
            return this.props.deleteCustomer(customer) // rec goes up
          }}
        />
      )
    })

    return (
      <div className='events-customers-list container-fluid js-list-view active'>
        {customerItemComponents}
      </div>
    )
  }
}

export default HomeCustomers
