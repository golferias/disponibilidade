import React, { useEffect, useState } from 'react'

export const HeaderCalendar = props => {
  const [days, setDays] = useState([])
  const [endWeek, setEndWeek] = useState()
  const [startWeek, setStartWeek] = useState()

  function fillInStates (startDate) {
    const startweek = new Date(startDate)
    
    let finishDay = new Date(startDate)
    finishDay.setDate(startDate.getDate() + 6)
    
    let arrDays = []

    for (let q = startDate; q <= finishDay; q.setDate(q.getDate() + 1)) {
      arrDays.push(q.getDate().toString())
    }
    
    setStartWeek(startweek)

    setEndWeek(startDate)
    
    setDays(arrDays)

    props.dispatchUpdateTextFooter(startweek)

    props.dispatchUpdateTextHeader(startweek)
  }

  useEffect(() => {
    const currentDate = new Date()
    let daysIndex = currentDate.getDay()

    if (daysIndex == 0) {
      daysIndex = 7
    }
    const startweek = new Date(currentDate)
    startweek.setDate(startweek.getDate() - daysIndex + 1)

    fillInStates(startweek)

    return
  }, [days.length])

  function UpdateDaysBack () {
    let oneweekbefore = new Date(startWeek)
    oneweekbefore.setDate(oneweekbefore.getDate() - 7)
    fillInStates(oneweekbefore)
  }

  function UpdateDaysForward () {
    fillInStates(endWeek)
  }

  return (
    <table className='calendar-table'>
      <tbody>
        <tr className='calendar-dayweek-text-row'>
          <td className='calendar-dayweek-text-empty'></td>
          <td className='calendar-dayweek-text'>
            S
          </td>
          <td className='calendar-dayweek-text-holiday' >
            T
          </td>
          <td className='calendar-dayweek-text' >
            Q
          </td>
          <td className='calendar-dayweek-text' >
            Q
          </td>
          <td className='calendar-dayweek-text' >
            S
          </td>
          <td className='calendar-dayweek-text-holiday' >
            S
          </td>
          <td className='calendar-dayweek-text-holiday'>
            D
          </td>
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
