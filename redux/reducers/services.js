import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DELETE,
  DELETE_SUCCESS,
  DELETE_FAIL,
  CREATE,
  CREATE_SUCCESS,
  CREATE_FAIL
} from '../actions/services'
import { compareValues } from '../../ClientApp/Components/common/sortArray'

export function services (
  state = {
    data: [],
    isLoading: true,
    hasErrored: false,
    errorMessage: ''
  },
  action
) {
  function create (state, ToCreate) {
    return { ...state, data: [...state.data, ToCreate] }
  }

  function deleteOne (state, ToDelete) {
    var filteredData = state.data.filter(item => item.id !== ToDelete.id)
       return {
      ...state,
      data: [...filteredData]     
    }
  }
  function updateOne (state, ToUpdate) {
    var newList = state.data.map(item =>
      item.id === ToUpdate.id ? { ...item, ...ToUpdate } : item
    )
    return { ...state, data: [...newList] }
  }

  switch (action.type) {
    case LOAD: {
      console.log('--- Triggered LOAD ---')
      return Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })
    }
    case LOAD_SUCCESS: {
      console.log('--- Triggered LOAD_SUCCESS ---')
      return Object.assign({}, state, {
        data: [...new Set(action.payload.data)].sort(compareValues('name')),
        isLoading: false,
        hasErrored: false
      })
    }
    case LOAD_FAIL: {
      console.log('--- Triggered LOAD_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    ///////////// UPDATE (PUT) /////////////////////////////////////////////////////////////////
    case UPDATE: {
      console.log('--- Triggered UPDATE ---')
      Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })
      const ToUpdate = action.payload.request.data
      const newState = updateOne(state, ToUpdate)
      return newState
    }
    case UPDATE_SUCCESS: {
      console.log('--- Triggered UPDATE_SUCCESS ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: false
      })
    }
    case UPDATE_FAIL: {
      console.log('--- Triggered Update_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    ///////////// DELETE  /////////////////////////////////////////////////////////////////
    case DELETE: {
      console.log('--- Triggered DELETE ---')
      Object.assign({}, state, {
        isLoading: true,
        hasErrored: false
      })

      const ToDelete = action.payload.request.data
      const newState = deleteOne(state, ToDelete)
      return newState
    }
    case DELETE_SUCCESS: {
      console.log('--- Triggered DELETE_SUCCESS ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: false
      })
    }
    case DELETE_FAIL: {
      console.log('--- Triggered DELETE_FAIL ---')
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: action.error.message
      })
    }
    ///////////// CREATE  /////////////////////////////////////////////////////////////////
    case CREATE: {
      console.log('--- Triggered CREATE ---')
      Object.assign({}, state, {
        isLoading: false,
        hasErrored: false
      })
      const ToCreate = action.payload.request.data
      const newState = create(state, ToCreate)
      return newState
    }
    case CREATE_SUCCESS: {
      console.log('--- Triggered CREATE_SUCCESS ---')

      Object.assign({}, state, {
        data: action.payload.data,
        isLoading: false,
        hasErrored: false
      })
      const ToCreate = action.payload.data
      const newState = create(state, ToCreate)
      return newState
    }
    case CREATE_FAIL: {
      console.log('--- Triggered CREATE_FAIL ---')
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
