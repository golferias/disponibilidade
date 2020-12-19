import React, { Component } from 'react'
import BookingRec from './BookingRec'

class HomeBooking extends Component {
  delete = book => {
    return this.props.delete(book)
  }

  render () {
    //const sortedArray = this.props.booking.sort('start')

    const itemComponents = this.props.booking.map(Rec => {
      return (
        <BookingRec
          customers={this.props.customers}
          key={Rec.id}
          book={Rec}
          delete={book => {
            return this.props.delete(book)
          }}
        />
      )
    })

    return (
      <div className='events-customers-list container-fluid js-list-view active'>
        {itemComponents.length ? itemComponents : <p>Sem dados</p>}
      </div>
    )
  }
}

export default HomeBooking
