import React, { useEffect, useState } from 'react'

export const HeaderCalendar = props => {
    const [days, setDays] = useState([])
  const [daysName, setDaysName] = useState([])
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const [currentDate, setCurrentDate] = useState()

    function fillInStates (startDate) {
    let finishDay = new Date(startDate)
    finishDay.setDate(startDate.getDate() + 7)

    let arrDays = []
    let arrDaysName = []

    for (let q = startDate; q <= finishDay; q.setDate(q.getDate() + 1)) {
      arrDays.push(q.getDate().toString())
      arrDaysName.push(weekDays[q.getDay()])
    }

    setCurrentDate(startDate)

    setDays(arrDays)

    setDaysName(arrDaysName)
    props.updateDate(startDate)
    //props.updateFooter(currentDate)
  }

  useEffect(() => {
    let startDate = new Date()
    fillInStates(startDate)

    return
  }, [days.length])

  function UpdateDaysBack () {
    let newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() - 16)
    fillInStates(newDate)
  }

  function UpdateDaysForward () {
    fillInStates(currentDate)
       
  }

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
              onClick={UpdateDaysForward}
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



