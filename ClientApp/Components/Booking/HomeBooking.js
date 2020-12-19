import React, { Component } from 'react'
import BookingRec from './BookingRec'

class HomeBooking extends Component {
  delete = book => {
    return this.props.delete(book)
  }

  render () {
    const itemComponents = this.props.booking.map(Rec => {
      return (
        <BookingRec
          showData={true}
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
        {itemComponents.length ? (
          itemComponents
        ) : (
          <div className='emptyList'>
            <p>Sem marcacoes</p>
          </div>
        )}
      </div>
    )
  }
}

export default HomeBooking
