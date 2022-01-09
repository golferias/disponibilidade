import React, { Component } from 'react'
import TableCalendar from './TableCalendar'

class HomeTableCalendar extends Component {
  render () {
    let itemComponents = this.props.booking

    // itemComponents = [
    //   0,
    //   0,
    //   1,
    //   0,
    //   1,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   1,
    //   1,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   1,
    //   1,
    //   0,
    //   1,
    //   0,
    //   0,
    //   0,
    //   1,
    //   0,
    //   0,
    //   1,
    //   1,
    //   0,
    //   0,
    //   1,
    //   1,
    //   1,
    //   1,
    //   1
    // ]

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
            <p>Calendario Sem dados </p>
          </div>
        )}
      </div>
    )
  }
}

export default HomeTableCalendar
