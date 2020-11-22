export const CUSTOMER_LOAD = 'CUSTOMER_LOAD'
export const CUSTOMER_LOAD_SUCCESS = 'CUSTOMER_LOAD_SUCCESS'
export const CUSTOMER_LOAD_FAIL = 'CUSTOMER_LOAD_FAIL'

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
