import React, { useEffect, useState } from 'react'

export const HeaderTextCalendar = props => {
  //const [labelday, setLabelDay] = useState('')

  // useEffect(() => {
  //   // let currentDate = new Date()
  //   // let months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  //   // setLabelDay(months[currentDate.getMonth()] +' '+currentDate.getFullYear().toString() )

  //   return
  // }, [])

  return <div>{props.textheader}</div>
}
