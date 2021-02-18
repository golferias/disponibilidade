export const LOAD = 'BOOKING_LOAD'
export const LOAD_SUCCESS = 'BOOKING_LOAD_SUCCESS'
export const LOAD_FAIL = 'BOOKING_LOAD_FAIL'

export const UPDATE = 'BOOKING_UPDATE'
export const UPDATE_SUCCESS = 'BOOKING_UPDATE_SUCCESS'
export const UPDATE_FAIL = 'BOOKING_UPDATE_FAIL'

export const DELETE = 'BOOKING_DELETE'
export const DELETE_SUCCESS = 'BOOKING_DELETE_SUCCESS'
export const DELETE_FAIL = 'BOOKING_DELETE_FAIL'

export const CREATE = 'BOOKING_CREATE'
export const CREATE_SUCCESS = 'BOOKING_CREATE_SUCCESS'
export const CREATE_FAIL = 'BOOKING_CREATE_FAIL'

export const FILTERCALENDARLIST = 'FILTERCALENDARLIST'

export function BookingFetchData () {
  console.log('actions/booking.js/FetchData LOAD....')

  return {
    type: LOAD,
    payload: {
      request: {
        url: '/booking'
      }
    }
  }
}
// function ParseBirth (customerRec) {
//   if (customerRec.birth === '') {
//     return { ...customerRec, birth: null }
//   }

//   return customerRec
// }

// function ParsePhone (customerRec) {
//   if (customerRec.phone && customerRec.phone.length > 0) {
//     return { ...customerRec, phone: parseInt(customerRec.phone) }
//   }
//   if (customerRec.phone === '') {
//     return { ...customerRec, phone: null }
//   }
//   return customerRec
// }
function SetIdZero (customerRec) {
  return { ...customerRec, id: 0 }
}

// function ParseValidations (customerRec) {
//   customerRec = ParsePhone(customerRec)
//   customerRec = ParseBirth(customerRec)
//   return customerRec
// }

export function dispatchUpdateFilterList (newDate) {
  console.log(
    'actions/booking.js/dispatchUpdateFilterList FILTERCALENDARLIST....'
  )
  return {
    type: FILTERCALENDARLIST,
    data: newDate
  }
}

export function Add (Rec) {
  console.log('actions/booking.js/AddBooking CREATE....')
  //  Rec = ParseValidations(Rec)

  Rec = SetIdZero(Rec)
  return {
    type: CREATE,
    payload: {
      request: {
        method: 'POST',
        url: '/booking',
        data: {
          ...Rec
        }
      }
    }
  }
}

export function updateBooking (Rec) {
  console.log('actions/booking.js/updateBooking UPDATE....')

  // Rec = ParseValidations(Rec)
  return {
    type: UPDATE,
    payload: {
      request: {
        method: 'PUT',
        url: '/booking/' + Rec.id,
        data: {
          ...Rec
        }
      }
    }
  }
}

export function Bdelete (Rec) {
  console.log('actions/booking.js/delete DELETE....')

  // Rec = ParseValidations(Rec)
  return {
    type: DELETE,
    payload: {
      request: {
        method: 'Delete',
        url: '/booking/' + Rec.id,
        data: {
          ...Rec
        }
      }
    }
  }
}