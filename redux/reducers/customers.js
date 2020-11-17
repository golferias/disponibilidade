import { CUSTOMER_LOAD,CUSTOMER_LOAD_SUCCESS,CUSTOMER_LOAD_FAIL  } from "../actions/customers";


export function customers(state = {
    data: [],
    isLoading: true,
    hasErrored: false,
    errorMessage: ""
},
action) {
    switch (action.type) {
        case CUSTOMER_LOAD: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored: false
            });
        }
        case CUSTOMER_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
        }
        case CUSTOMER_LOAD_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                hasErrored: true,
                errorMessage: action.error.message
            });
        }      
        default:
            return state;
    }
}