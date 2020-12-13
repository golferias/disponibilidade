import React, { useEffect, useState } from 'react'

export const HeaderTextCalendar = props => {
  const [labelday, setLabelDay] = useState({
    text: 'Dezembro 2020'
  })

  useEffect(() => {
    return
  }, [])

  return <div>{labelday.text}</div>
}
