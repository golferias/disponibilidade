import { CALENDAR_UPDATEDATE } from '../actions/calendar'

export function calendar (
  state = {
    data: ''
  },
  action
) {
    const months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
  switch (action.type) {
    case CALENDAR_UPDATEDATE: {
      console.log('--- Triggered CALENDAR_UPDATEDATE ---')
      const currentDate = new Date(action.data)
       
let date= currentDate.getDate().toString() +' ' +months[currentDate.getMonth()] +' '+currentDate.getFullYear().toString() 
      return Object.assign({}, state, {
        data: date
      })
    }
    default: // need this for default case
      return state 
  }
}
