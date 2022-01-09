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
        return <td className='tablecalendar-day-text_free'></td>
      }
    })
  }

  renderHour (hour, halfHour) {
    let indexHour = parseInt(hour)
    switch (true) {
      case indexHour > 0:
        let finalHour = hour
        if (!halfHour) {
          finalHour = finalHour.concat(':00')
        } else {
          finalHour = finalHour.concat(':30')
        }
        return <td className='tablecalendar-hourscolumn'>{finalHour}</td>
      case indexHour == 0:
        return <td className='tablecalendar-day-text_lunchtime'></td>
      default:
        return <td className='tablecalendar-lastcolumn'></td>
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
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('', false)}
            {this.renderHour('0', false)}
            {this.renderHour('0', false)}
            {this.renderHour('0', false)}
            {this.renderHour('0', false)}
            {this.renderHour('0', false)}
            {this.renderHour('0', false)}
            {this.renderHour('0', false)}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('15', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(8)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('15', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(9)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('16', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(10)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('16', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(11)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('17', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(12)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('17', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(13)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('18', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(14)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('18', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(15)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('19', false)}
            {this.renderHoliday()}
            {this.renderMorningTable(16)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
          <tr className='tablecalendar-dayweek-text-row'>
            {this.renderHour('19', true)}
            {this.renderHoliday()}
            {this.renderMorningTable(17)}
            {this.renderHoliday()}
            {this.renderHour('-1', false)}
          </tr>
        </tbody>
      </table>
    )
  }
}
