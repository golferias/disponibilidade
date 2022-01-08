import React, { Component } from 'react'

export default class TableCalendar extends Component {
  render () {
    return (
      <table className='calendar-table'>
        <tbody>
          <tr className='tablecalendar-dayweek-text-row'>
            <td className='tablecalendar-dayweek-text-empty'>09:00</td>
            <td className='tablecalendar-day-text'>1</td>
            <td className='tablecalendar-day-text'>
              {this.props.items[0]}
            </td>{' '}
            {/*terca*/}
            <td className='tablecalendar-day-text'>{this.props.items[1]}</td>
            {/*quarta*/}
            <td className='tablecalendar-day-text'>
              {this.props.items[2]}
            </td>{' '}
            {/*quinta*/}
            <td className='tablecalendar-day-text'>
              {this.props.items[3]}
            </td>{' '}
            {/*sexta*/}
            <td className='tablecalendar-day-text'>
              {this.props.items[4]}
            </td>{' '}
            {/*sabado*/}
            <td className='tablecalendar-day-text'>2</td> {/*Domingos*/}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            <td className='tablecalendar-dayweek-text-empty'>09:30</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
