import React, { Component } from 'react'
import CustomerRec from '../customers/CustomerRec'

class HomeCalendar extends Component {
  render () {
    const customerItemComponents = this.props.customers.map(customerRec => {
      return <CustomerRec key={customerRec.id} customer={customerRec} />
    })

    return (
      <div className='events-customers-list container-fluid js-list-view active'>
        {customerItemComponents.length ? (
          customerItemComponents
        ) : (
          <p>Sem Marcacoes</p>
        )}
      </div>
    )
  }
}

export default HomeCalendar
