import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import ChargeReducer from './ChargeReducer';

export default combineReducers({
    user:LoginReducer,
    charge:ChargeReducer
})