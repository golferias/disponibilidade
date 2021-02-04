import React from 'react'
import HeaderTitle from '../common/HeaderTitle'
import Home from './HomeBooking'
import Add from '../common/Add'

export default function BookingContainer (props) {
  return (
    <div className='container-main'>
      <div className='row'>
        <div className='col-12'>
          <HeaderTitle title='marcacoes' />
          <Add title='Marcacao' linkto='/addbooking/' />
          <Home
            services={props.services}
            customers={props.customers}
            booking={props.booking}
            delete={book => {
              return props.delete(book)
            }}
          />
        </div>
      </div>
    </div>
  )
}
