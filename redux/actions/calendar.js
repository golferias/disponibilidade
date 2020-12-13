export const CALENDAR_UPDATEDATE = 'CALENDAR_UPDATEDATE'

export function updateDate (newDate) {
  console.log('actions/calendar.js/CALENDAR_UPDATEDATE....')

  return {
    type: CALENDAR_UPDATEDATE,
    data: newDate
  }
}
