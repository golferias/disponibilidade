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
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_UPDATEDATE
} from '../actions/customers'

import { compareValues } from '../../ClientApp/Components/common/sortArray'
export function customers (
  state = {
    data: [],
    isLoading: false,
    hasErrored: false,
    errorMessage: ''
  },
  action
) {
  function create (state, ToCreate) {
    if(ToCreate == undefined)
    {
      return state;
    }
    let newState = { ...state, data: [...state.data, ToCreate] }
    return Object.assign({}, state, {
      data: [...new Set(newState.data)].sort(compareValues('name')),
      isLoading: false,
      hasErrored: false
    })
    // return { ...state, data: [...state.data, customerToCreate] }
  }

  function deleteOne (state, customerToDelete) {
    var filteredArray = state.data.filter(
      item => item.id !== customerToDelete.id
    )
    return { ...state, data: [...filteredArray] }
  }
  function updateOne (state, ToUpdate) {
    var newList = state.data.map(item =>
      item.id === ToUpdate.id ? { ...item, ...ToUpdate } : item
    )
    return Object.assign({}, state, {
      data: newList,
      isLoading: true,
      hasErrored: false
    })
  }

  switch (action.type) {
    case CUSTOMER_LOAD: {
      console.log('--- Triggered CUSTOMER_LOAD ---')
      return Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })
    }
    case CUSTOMER_LOAD_SUCCESS: {
      console.log('--- Triggered CUSTOMER_LOAD_SUCCESS ---')
      return Object.assign({}, state, {
        data: [...new Set(action.payload.data)].sort(compareValues('name')),
        isLoading: false,
        hasErrored: false
      })
    }
    case CUSTOMER_LOAD_FAIL: {
      console.log('--- Triggered CUSTOMER_LOAD_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.data
      })
    }
    ///////////// UPDATE (PUT) /////////////////////////////////////////////////////////////////
    case CUSTOMER_UPDATE: {
      console.log('--- Triggered CUSTOMER_UPDATE ---')
      const ToUpdate = action.payload.request.data
      return updateOne(state, ToUpdate)
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
        errorMessage: action.error.data
      })
    }
    ///////////// DELETE  /////////////////////////////////////////////////////////////////
    case CUSTOMER_DELETE: {
      console.log('--- Triggered CUSTOMER_DELETE ---')
      const ToDelete = action.payload.request.data
      return deleteOne(state, ToDelete)
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
        errorMessage: action.error.data
      })
    }
    ///////////// CREATE  /////////////////////////////////////////////////////////////////
    case CUSTOMER_CREATE: {
      console.log('--- Triggered CUSTOMER_CREATE ---')
      Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })
    }
    case CUSTOMER_CREATE_SUCCESS: {
      console.log('--- Triggered CUSTOMER_CREATE_SUCCESS ---')

      const ToCreate = action.payload.data
      return create(state, ToCreate)
    }
    case CUSTOMER_CREATE_FAIL: {
      console.log('--- Triggered CUSTOMER_CREATE_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.data
      })
    }

    case CUSTOMER_UPDATEDATE: {
      const currentDate = new Date(action.data)
      let filteredcustomers = state.data.filter(data => {
        let b = new Date(data.birth)
        if (b.getDate() === currentDate.getDate()) return data
      })
      return {
        ...state,
        data: filteredcustomers
      }
    }

    default:
      return state
  }
}
