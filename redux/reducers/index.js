import { combineReducers } from 'redux';
import {speakers} from './speakers';
import {sessions} from "./sessions";
import {customers} from "./customers";


export default combineReducers({
    speakers,
    sessions,
    customers
});