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

  renderBooked () {
    return <td className='tablecalendar-day-text_booked'></td>
  }
  renderFree () {
    return <td className='tablecalendar-day-text_free'></td>
  }
  renderLunchTime () {
    return <td className='tablecalendar-day-text_lunchtime'></td>
  }

  calculateHour (startWorkingTime) {
    if (startWorkingTime.length == 1) {
      return '0' + startWorkingTime
    }

    return startWorkingTime
  }

  AddHalfHour (hour, addHalfHourToTheCurrentHour) {
    let d = new Date()
    d.setHours(parseInt(hour))
    if (addHalfHourToTheCurrentHour) {
      d.setHours(d.getHours() + 1)
    }
    return d.getHours().toString()
  }

  AddHour (hour) {
    let d = new Date()
    d.setHours(parseInt(hour) + 1)
    return d.getHours().toString()
  }

  renderCell (rowIndex) {
    let html = [0]
    html[0] = ''
    let _daysInAweek = 7
    for (let index = 0; index < _daysInAweek; index++) {
      const element = this.props.items[rowIndex * _daysInAweek + index]
      if (element == 0) {
        html[0] = html.concat(this.renderFree())
      }
      if (element == 1) {
        html[0] = html.concat(this.renderBooked())
      }
      if (element == 2) {
        html[0] = html.concat(this.renderLunchTime())
      }
      if (element == 3) {
        html[0] = html.concat(this.renderHoliday())
      }
    }
    return html
  }

  renderTable () {
    let html = [0]
    let weekday = 0
    let _totalRows = 22
    let _startWorkingTime = '09'
    let _showHalfHours = true

    html[0] = ''

    let aux_showHalHours = false
    let aux_startWorkingTime = _startWorkingTime

    for (let index = 0; index < _totalRows; index++) {
      html[0] = html.concat(
        <tr className='tablecalendar-dayweek-text-row'>
          {this.renderHour(
            this.calculateHour(aux_startWorkingTime.toString()),
            aux_showHalHours
          )}
          {this.renderCell(index)}
          {/* {this.renderHoliday()} */}
          {/* {this.renderMorningTable(index)}
          {this.renderHoliday()} */}
          {this.renderHour('-1', false)}
        </tr>
      )

      // for (let col = 0; col < _daysInAweek; col++) {
      //   html[0] = html.concat(
      //     <tr className='tablecalendar-dayweek-text-row'>

      //       {this.renderHoliday()}
      //       {this.renderMorningTable(index)}
      //       {this.renderHoliday()}
      //       {this.renderHour('-1', false)}
      //     </tr>
      //   )
      // }

      if (_showHalfHours) {
        aux_startWorkingTime = this.AddHalfHour(
          aux_startWorkingTime,
          aux_showHalHours
        )
        aux_showHalHours = !aux_showHalHours
      } else {
        aux_startWorkingTime = this.AddHour(aux_startWorkingTime)
      }

      weekday++
      if ((weekday = 6)) weekday = 0
    }

    // html[0] = (
    //   <tr className='tablecalendar-dayweek-text-row'>
    //     {this.renderHour(startWorkingTime, false)}
    //     {this.renderHoliday()}
    //     {this.renderMorningTable(0)}
    //     {this.renderHoliday()}
    //     {this.renderHour('-1', false)}
    //   </tr>
    // )

    // html[0] = html.concat(
    //   <tr className='tablecalendar-dayweek-text-row'>
    //     {this.renderHour('09', true)}
    //     {this.renderHoliday()}
    //     {this.renderMorningTable(1)}
    //     {this.renderHoliday()}
    //     {this.renderHour('-1', false)}
    //   </tr>
    // )

    return html
  }

  render () {
    return (
      <table className='calendar-table'>
        <tbody>
          {this.renderTable()}
          {/* <tr className='tablecalendar-dayweek-text-row'>
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
          </tr> */}
        </tbody>
      </table>
    )
  }
}
