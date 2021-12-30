
import { combineReducers } from 'redux' 
import{authReducer} from './auth/authReducer'
import{customerReducer} from './customer/customerReducer'
import{orderMasterReducer} from './orderMaster/orderMasterReducer'
import{foodItemReducer} from './foodItem/foodItemReducer'
import {userRegistrationReducer} from './userRegistration/userRegistrationReducer'
const rootReducer = combineReducers({
    customerData:customerReducer,
    orderMaster:orderMasterReducer,
    foodItems:foodItemReducer,
    usersList:userRegistrationReducer,

})

export default rootReducer