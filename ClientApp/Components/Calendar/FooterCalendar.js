import React, { useEffect, useState } from 'react'

export const FooterCalendar = props => {
  const [labelday, setLabelDay] = useState('')

  useEffect(() => {
    let currentDate = new Date()
    let months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    setLabelDay( currentDate.getDate().toString() +' ' +months[currentDate.getMonth()] +' '+currentDate.getFullYear().toString() )

    return
  }, [])

  return <div className='calendar-footer'>{labelday}</div>
}