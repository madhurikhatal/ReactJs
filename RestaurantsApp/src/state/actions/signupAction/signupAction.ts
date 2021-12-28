import {ActionType,Action} from "../../action-type/signupAction-Type"
import { Dispatch } from 'redux'
import axios, { AxiosResponse } from "axios";
//import {iCustomer} from '../../../Models/customer/customer'
import { iSignup } from "../../../Models/signup/signup";
export const fetchSignupRequest = () => {
    
  return {
    type: ActionType.FETCH_SIGNUP_REQUEST
  }
}

export const fetchSignupSucess = (signup:iSignup[] ) => {
  return {
    type:  ActionType.FETCH_SIGNUP_SUCESS,
    payload: signup
  }
}

export const fetchSignupFailure = (error: any) => {
  return {
    type: ActionType.FETCH_SIGNUP_FAILURE,
    payload: error
  }
}
const BASE_URL = 'http://localhost:3000/signup';  
export const getSignup = () => {
 debugger
    return (dispatch:Dispatch<Action>) => {
      
      let url = BASE_URL;
      dispatch({ type: ActionType.FETCH_SIGNUP_REQUEST,payload:ActionType.FETCH_SIGNUP_REQUEST})
      axios.get(url)
        .then((response : AxiosResponse<iSignup[]>) => {
          debugger
          dispatch({
               type:  ActionType.FETCH_SIGNUP_SUCESS,
               payload:response.data
            } )
          //onSuccess() */fetchCustomerSuccess(response.data)
        })
        .catch(error => {
          dispatch( {
            type: ActionType.FETCH_SIGNUP_FAILURE,
            payload: error
          })
        })
    }
  }

  /*
https://www.codefeetime.com/post/typescript-class-or-interface-for-model/
 axios
      .get('some url to api')
      .then((res: AxiosResponse<ICompany>) => {
        setData(res.data);
      })

  */