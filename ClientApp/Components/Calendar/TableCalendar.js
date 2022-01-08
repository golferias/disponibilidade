import React, { Component } from 'react'

export default class TableCalendar extends Component {
  renderMorningTable (indexHour) {
    if (indexHour > 0) {
      indexHour = indexHour * 5
    }
    return this.props.items.slice(indexHour, indexHour + 5).map(rec => {
      if (rec == 1) {
        return <td className='tablecalendar-day-text_booked'></td>
      } else {
        return <td className='tablecalendar-day-text'></td>
      }
    })
  }

  renderHour (hour, halfHour) {
    let indexHour = parseInt(hour)
    switch (true) {
      case indexHour > -1:
        let finalHour = hour
        if (!halfHour) {
          finalHour = finalHour.concat(':00')
        } else {
          finalHour = finalHour.concat(':30')
        }
        return <td className='tablecalendar-dayweek-text-empty'>{finalHour}</td>

      default:
        return <td className='tablecalendar-dayweek-text-empty'></td>
    }
  }

  renderHoliday () {
    return <td className='tablecalendar-day-text_holiday'></td>
  }

  render () {
    return (
      <table className='calendar-table'>
        <tbody>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('09', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(0)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('09', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(1)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('10', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(2)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('10', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(3)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('11', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(4)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('11', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(5)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('12', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(6)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('12', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(7)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
        </tbody>
      </table>
    )
  }
}
