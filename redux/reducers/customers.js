import {
  CUSTOMER_LOAD,
  CUSTOMER_LOAD_SUCCESS,
  CUSTOMER_LOAD_FAIL,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_DELETE,CUSTOMER_DELETE_SUCCESS,CUSTOMER_DELETE_FAIL
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
      console.log("--- Triggered CUSTOMER_UPDATE ---");
      const customerIdToUpdate = action.payload.request.data.id
      const newState = updateOneCustomer(state, customerIdToUpdate)
      return newState
    }
    case CUSTOMER_UPDATE_SUCCESS: {
      console.log("--- Triggered CUSTOMER_UPDATE_SUCCESS ---");
      const customerIdToUpdate = action.payload.data.id
      const newState = updateOneCustomer(state, customerIdToUpdate)
      return newState
    }
    case CUSTOMER_UPDATE_FAIL: {
      console.log("--- Triggered CUSTOMER_UPDATE_FAIL ---");
      const customerIdToUpdate =
        action.meta.previousAction.payload.request.data.id
      const newState = updateOneCustomer(state, customerIdToUpdate)
      return newState
    }
    ///////////// DELETE  /////////////////////////////////////////////////////////////////
    case CUSTOMER_DELETE: {
        const customerIdToDelete = action.payload.request.data.id
        const newState = deleteOneCustomer(state, customerIdToDelete)
        return newState
    }
    case CUSTOMER_DELETE_SUCCESS: {
        const customerIdToDelete = action.payload.data.id
        const newState = deleteOneCustomer(state, customerIdToDelete)
        return newState
      }
      case CUSTOMER_DELETE_FAIL: {
        const customerIdToDelete =
          action.meta.previousAction.payload.request.data.id
        const newState = updateOneCustomer(state, customerIdToDelete)
        return newState
      }
    default:
      return state
  }
}
