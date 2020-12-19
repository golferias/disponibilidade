export const LOAD = 'LOAD'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'

export const UPDATE = 'UPDATE'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAIL = 'UPDATE_FAIL'

export const DELETE = 'DELETE'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAIL = 'DELETE_FAIL'

export const CREATE = 'CREATE'
export const CREATE_SUCCESS = 'CREATE_SUCCESS'
export const CREATE_FAIL = 'CREATE_FAIL'


export const FILTERCALENDARLIST ='FILTERCALENDARLIST'


export function FetchData () {
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
function ParseBirth (customerRec) {
  if (customerRec.birth === '') {
    return { ...customerRec, birth: null }
  }
  
  return customerRec
}

function ParsePhone (customerRec) {
  if (customerRec.phone && customerRec.phone.length > 0) {
    return { ...customerRec, phone: parseInt(customerRec.phone) }
  }
  if (customerRec.phone === '') {
    return { ...customerRec, phone: null }
  }
  return customerRec
}
function SetIdZero (customerRec) {
  return { ...customerRec, id: 0 }
}

function ParseValidations (customerRec) {
  customerRec = ParsePhone(customerRec)
  customerRec = ParseBirth(customerRec)
  return customerRec
}

export function dispatchUpdateFilterList(newDate){
  console.log('actions/booking.js/dispatchUpdateFilterList FILTERCALENDARLIST....')
  return {
    type: FILTERCALENDARLIST,
    data: newDate
  }
}

export function Add (Rec) {
  console.log('actions/booking.js/Add CREATE....')
  Rec = ParseValidations(Rec)

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

export function update (Rec) {
  console.log('actions/booking.js/updateCustomer UPDATE....')

  Rec = ParseValidations(Rec)
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

  Rec = ParseValidations(Rec)
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
