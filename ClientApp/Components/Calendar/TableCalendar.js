import React, { Component } from 'react'

export default class TableCalendar extends Component {
  render () {
    return (
      <table className='calendar-table'>
        <tbody>
          <tr className='tablecalendar-dayweek-text-row'>
            <td className='tablecalendar-dayweek-text-empty'>09:00</td>
            <td className='tablecalendar-day-text'></td>
            <td className='tablecalendar-day-text'></td> {/*terca*/}
            <td className='tablecalendar-day-text'></td> {/*quarta*/}
            <td className='tablecalendar-day-text'></td> {/*quinta*/}
            <td className='tablecalendar-day-text'></td> {/*sexta*/}
            <td className='tablecalendar-day-text'></td> {/*sabado*/}
            <td className='tablecalendar-day-text'></td> {/*Domingos*/}
            <td className='tablecalendar-dayweek-text-empty'></td>
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            <td className='tablecalendar-dayweek-text-empty'>09:30</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
