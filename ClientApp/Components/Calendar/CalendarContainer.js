import React from 'react'
import HeaderTitle from '../common/HeaderTitle'
import Home from './HomeCalendar'
import { Link } from 'react-router-dom'
import { HeaderCalendar } from './HeaderCalendar'
import { HeaderTextCalendar } from './HeaderTextCalendar'
import { FooterCalendar } from './FooterCalendar'

export default function CalendarContainer (props) {
  return (
    <div className='container-main'>
      <div className='row'>
        <div className='col-12'>
          <HeaderTitle title='Calendario' />
          <div className='calendar-headertext'>
            <HeaderTextCalendar />
          </div>
          <div>
            <HeaderCalendar calendar={props.calendar} updateDate={newDate => {
              props.updateDate(newDate)
            }}/>
          </div>
          <div className='calendar-headertext'>
            <FooterCalendar calendar={props.calendar} />
          </div>
          <Home customers={props.customers} />
        </div>
      </div>
    </div>
  )
}