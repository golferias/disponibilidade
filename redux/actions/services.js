export const LOAD = 'SERVICES_LOAD'
export const LOAD_SUCCESS = 'SERVICES_LOAD_SUCCESS'
export const LOAD_FAIL = 'SERVICES_LOAD_FAIL'

export const UPDATE = 'UPDATE_SERVICE'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS_SERVICE'
export const UPDATE_FAIL = 'UPDATE_FAIL_SERVICE'

export const DELETE = 'DELETE_SERVICE_SERVICE'
export const DELETE_SUCCESS = 'DELETE_SUCCESS_SERVICE'
export const DELETE_FAIL = 'DELETE_FAIL_SERVICE'

export const CREATE = 'CREATE_SERVICE'
export const CREATE_SUCCESS = 'CREATE_SUCCESS_SERVICE'
export const CREATE_FAIL = 'CREATE_FAIL_SERVICE'

export function ServicesFetchData () {
  console.log('actions/services.js/FetchData LOAD....')

  return {
    type: LOAD,
    payload: {
      request: {
        url: '/services'
      }
    }
  }
}

function SetIdZero (customerRec) {
  return { ...customerRec, id: 0 }
}

function ParseValidations (customerRec) {
  return customerRec
}

export function Add (Rec) {
  console.log('actions/services.js/Add CREATE....')
  Rec = ParseValidations(Rec)

  Rec = SetIdZero(Rec)
  return {
    type: CREATE,
    payload: {
      request: {
        method: 'POST',
        url: '/services',
        data: {
          ...Rec
        }
      }
    }
  }
}

export function Update (Rec) {
  console.log('actions/services.js/update UPDATE....')

  Rec = ParseValidations(Rec)
  return {
    type: UPDATE,
    payload: {
      request: {
        method: 'PUT',
        url: '/services/' + Rec.id,
        data: {
          ...Rec
        }
      }
    }
  }
}

export function Bdelete (Rec) {
  console.log('actions/services.js/delete DELETE....')

  Rec = ParseValidations(Rec)
  return {
    type: DELETE,
    payload: {
      request: {
        method: 'Delete',
        url: '/services/' + Rec.id,
        data: {
          ...Rec
        }
      }
    }
  }
}
