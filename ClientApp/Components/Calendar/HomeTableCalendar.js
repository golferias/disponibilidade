import React, { Component } from 'react'
import TableCalendar from './TableCalendar'

class HomeTableCalendar extends Component {
  render () {
    let orderedBooking = this.props.booking

    let itemComponents = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]

    // itemComponents = orderedBooking.map(Rec => {
    //   return (
    //     <TableCalendar
    //       showData={false}
    //       key={Rec.id}
    //       book={Rec}
    //       services={this.props.services}
    //       customers={this.props.customers}
    //       delete={book => {
    //         return this.props.delete(book)
    //       }}
    //     />
    //   )
    // })

    return (
      <div>
        {itemComponents.length ? (
          <TableCalendar items={itemComponents} />
        ) : (
          <div className='emptyList'>
            <p>Sem dados</p>
          </div>
        )}
      </div>
    )
  }
}

export default HomeTableCalendar
