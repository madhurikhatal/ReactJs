 
//import { ActionType,Action } from "../../action-type/orderMasterAction-Type"
import { ActionType,Action } from "../../action-type/userRegistrationAction-Type"
 
const initialState = {
  loading: false,
  users: [],
  error: ''
}

export const userRegistrationReducer=(state=initialState,action:Action)=>{
  switch (action.type) {
      case ActionType.FETCH_USERREGISTRATION_REQUEST:
        return {
          ...state,
          loading: true
        }
      case ActionType.FETCH_USERREGISTRATION_SUCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case ActionType.FETCH_USERREGISTRATION_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  
}
