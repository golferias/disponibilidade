import React from 'react'
import HeaderTitle from '../common/HeaderTitle'
// import Home from './HomeCalendar'
import HomeTableCalendar from './HomeTableCalendar'

import { HeaderCalendar } from './HeaderCalendar'
import { HeaderTextCalendar } from './HeaderTextCalendar'
// import { FooterCalendar } from './FooterCalendar'
// import Add from '../common/Add'

export default function CalendarContainer (props) {
  return (
    <div className='container-main'>
      <div className='row'>
        <div className='col-12'>
          <HeaderTitle />
          {/* <Add title='Marcacao' linkto='/addbooking/' /> */}
          <div>
            <HeaderTextCalendar textheader={props.textheader} />
          </div>
          <div>
            <HeaderCalendar
              calendar={props.calendar}
              dispatchUpdateFilterList={newDate => {
                props.dispatchUpdateFilterList(newDate)
              }}
              dispatchUpdateTextFooter={newDate => {
                props.dispatchUpdateTextFooter(newDate)
              }}
              dispatchUpdateTextHeader={newDate => {
                props.dispatchUpdateTextHeader(newDate)
              }}
            />
          </div>
          {/* <div className='calendar-headertextfooter'>
              <FooterCalendar textfooter={props.textfooter} />
            </div> */}
          {/* <Home
            services={props.services}
            customers={props.customers}
            booking={props.booking}
            delete={book => {
              return props.delete(book)
            }}
          /> */}
          <HomeTableCalendar booking={props.booking} />
        </div>
      </div>
    </div>
  )
}
