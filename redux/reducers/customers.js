import {
  CUSTOMER_LOAD,
  CUSTOMER_LOAD_SUCCESS,
  CUSTOMER_LOAD_FAIL,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_DELETE,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_CREATE,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAIL
} from '../actions/customers'

export function customers (
  state = {
    data: [],
    isLoading: true,
    hasErrored: false,
    errorMessage: ''
  },
  action
) {
  function createCustomer (state, customerToCreate) {
    return { ...state, data: [...state.data, customerToCreate] }
  }

  function deleteOneCustomer (state, customerToDelete) {
    var filteredArray = state.data.filter(
      item => item.id !== customerToDelete.id
    )
    return { ...state, data: [...filteredArray] }
  }
  function updateOneCustomer (state, customerToUpdate) {
    var newCustomerList = state.data.map(item =>
      item.id === customerToUpdate.id ? { ...item, ...customerToUpdate } : item
    )
    return { ...state, data: [...newCustomerList] }
  }

  switch (action.type) {
    case CUSTOMER_LOAD: {
      return Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })
    }
    case CUSTOMER_LOAD_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload.data,
        isLoading: false,
        hasErrored: false
      })
    }
    case CUSTOMER_LOAD_FAIL: {
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    ///////////// UPDATE (PUT) /////////////////////////////////////////////////////////////////
    case CUSTOMER_UPDATE: {
      console.log('--- Triggered CUSTOMER_UPDATE ---')
      Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })
      const customerToUpdate = action.payload.request.data
      const newState = updateOneCustomer(state, customerToUpdate)
      return newState
    }
    case CUSTOMER_UPDATE_SUCCESS: {
      console.log('--- Triggered CUSTOMER_UPDATE_SUCCESS ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: false
      })
    }
    case CUSTOMER_UPDATE_FAIL: {
      console.log('--- Triggered CUSTOMER_Update_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    ///////////// DELETE  /////////////////////////////////////////////////////////////////
    case CUSTOMER_DELETE: {
      console.log('--- Triggered CUSTOMER_DELETE ---')
      Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })

      const customerIdToDelete = action.payload.request.data
      const newState = deleteOneCustomer(state, customerIdToDelete)
      return newState
    }
    case CUSTOMER_DELETE_SUCCESS: {
      console.log('--- Triggered CUSTOMER_DELETE_SUCCESS ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: false
      })
    }
    case CUSTOMER_DELETE_FAIL: {
      console.log('--- Triggered CUSTOMER_DELETE_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    ///////////// CREATE  /////////////////////////////////////////////////////////////////
    case CUSTOMER_CREATE: {
      console.log('--- Triggered CUSTOMER_CREATE ---')
      Object.assign({}, state, {
        isLoading: false,
        hasErrored: false
      })
      const customerToCreate = action.payload.request.data
      const newState = createCustomer(state, customerToCreate)
      return newState
    }
    case CUSTOMER_CREATE_SUCCESS: {
      console.log('--- Triggered CUSTOMER_CREATE_SUCCESS ---')

      Object.assign({}, state, {
        data: action.payload.data,
        isLoading: false,
        hasErrored: false
      })
      const customerToCreate = action.payload.data
      const newState = createCustomer(state, customerToCreate)
      return newState
    }
    case CUSTOMER_CREATE_FAIL: {
      console.log('--- Triggered CUSTOMER_CREATE_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    default:
      return state
  }
}
