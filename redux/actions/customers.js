export const CUSTOMER_LOAD = 'CUSTOMER_LOAD'
export const CUSTOMER_LOAD_SUCCESS = 'CUSTOMER_LOAD_SUCCESS'
export const CUSTOMER_LOAD_FAIL = 'CUSTOMER_LOAD_FAIL'

export const CUSTOMER_UPDATE = 'CUSTOMER_UPDATE'
export const CUSTOMER_UPDATE_SUCCESS = 'CUSTOMER_UPDATE_SUCCESS'
export const CUSTOMER_UPDATE_FAIL = 'CUSTOMER_UPDATE_FAIL'

export const CUSTOMER_DELETE = 'CUSTOMER_DELETE'
export const CUSTOMER_DELETE_SUCCESS = 'CUSTOMER_DELETE_SUCCESS'
export const CUSTOMER_DELETE_FAIL = 'CUSTOMER_DELETE_FAIL'

export const CUSTOMER_CREATE = 'CUSTOMER_CREATE'
export const CUSTOMER_CREATE_SUCCESS = 'CUSTOMER_CREATE_SUCCESS'
export const CUSTOMER_CREATE_FAIL = 'CUSTOMER_CREATE_FAIL'

export function customersFetchData () {
  console.log('actions/customers.js/customersFetchData CUSTOMER_LOAD....')

  return {
    type: CUSTOMER_LOAD,
    payload: {
      request: {
        url: '/customers'
      }
    }
  }
}

export function AddCustomer (customerRec) {
  console.log('actions/customers.js/AddCustomer CUSTOMER_CREATE....')
  customerRec.id = 0
  if (customerRec.phone && customerRec.phone.length > 0) {
    customerRec.phone = parseInt(customerRec.phone)
  }
  if (customerRec.phone === '') {
    customerRec.phone = null
  }

  return {
    type: CUSTOMER_CREATE,
    payload: {
      request: {
        method: 'POST',
        url: '/customers',
        data: {
          ...customerRec
        }
      }
    }
  }
}

export function updateCustomer (customerRec) {
  console.log('actions/customers.js/updateCustomer CUSTOMER_UPDATE....')

  if (customerRec.phone && customerRec.phone.length > 0) {
    customerRec.phone = parseInt(customerRec.phone)
  }
  if (customerRec.phone === '') {
    customerRec.phone = null
  }
  return {
    type: CUSTOMER_UPDATE,
    payload: {
      request: {
        method: 'PUT',
        url: '/customers/' + customerRec.id,
        data: {
          ...customerRec
        }
      }
    }
  }
}

export function deleteCustomer (customerRec) {
  console.log('actions/customers.js/deleteCustomer CUSTOMER_DELETE....')

  if (customerRec.phone && customerRec.phone.length > 0) {
    customerRec.phone = parseInt(customerRec.phone)
  }
  if (customerRec.phone === '') {
    customerRec.phone = null
  }
  return {
    type: CUSTOMER_DELETE,
    payload: {
      request: {
        method: 'Delete',
        url: '/customers/' + customerRec.id,
        data: {
          ...customerRec
        }
      }
    }
  }
}
