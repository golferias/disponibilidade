import React, { useEffect, useState } from 'react'

export const HeaderCalendar = props => {
  const [days, setDays] = useState([])
  const [daysName, setDaysName] = useState([])

  useEffect(() => {
    var weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    let currentDate = new Date()
    let finishDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7
    )
    let arrDays = []
    let arrDaysName = []

    for (let q = currentDate; q <= finishDay; q.setDate(q.getDate() + 1)) {
      arrDays.push(q.getDate().toString())
      arrDaysName.push(weekDays[q.getDay()])
      //console.log(weekDays[q.getDay()])
    }
    setDays(arrDays)
    setDaysName(arrDaysName)

    return
  }, [days.length])
  function UpdateDaysBack () {}

  return (
    <table className='calendar-table'>
      <tbody>
        <tr className='calendar-dayweek-text-row'>
          <td className='calendar-dayweek-text-empty'></td>
          {daysName.map((d, index) => {
            return (
              <td className='calendar-dayweek-text' key={index}>
                {d}
              </td>
            )
          })}
          <td className='calendar-dayweek-text-empty'></td>
        </tr>
        <tr>
          <td className='calendar-td-btleft'>
            <button
              className='btn-calendar btn-primary'
              onClick={UpdateDaysBack}
            >
              {' '}
              &lt;
            </button>
          </td>
          {days.map(d => {
            return (
              <td className='calendar-day-text' key={d}>
                {d}
              </td>
            )
          })}
          <td className='calendar-td-btright'>
            <button
              className='btn-calendar btn-primary'
              onClick={() => this.props.deleteCustomer(this.props.customer)}
            >
              {' '}
              &gt;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
