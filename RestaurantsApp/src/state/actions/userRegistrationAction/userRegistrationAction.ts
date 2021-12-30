import {ActionType,Action} from "../../action-type/userRegistrationAction-Type"
import { Dispatch } from 'redux'
import axios, { AxiosResponse } from "axios";
//import {iCustomer} from '../../../Models/customer/customer'
//import { iSignup } from "../../../Models/signup/signup";
//import { iuserRegistration } from "../../../Models/userRegistration/userRegistration";
import {iuserRegistration } from "./../../../Models/userRegistration/userRegistration";
import IFormInput from "./../../../components/userRegistration/UserRegistration"
export const fetchUserregistrationRequest = () => {
    
  return {
    type:ActionType.FETCH_USERREGISTRATION_REQUEST,
  }
}

export const fetchUserregistrationSucess = (userRegistration:iuserRegistration[] ) => {
  return {
    type:  ActionType.FETCH_USERREGISTRATION_SUCESS,
    payload: userRegistration
  }
}

export const fetchUserregistrationFailure = (error: any) => {
  return {
    type: ActionType.FETCH_USERREGISTRATION_FAILURE,
    payload: error
  }
}
//GET USER DETAILS
const BASE_URL = 'http://localhost:3000/users';  
export const getAllUsers = () => {
 debugger
    return (dispatch:Dispatch<Action>) => {
      
      let url = BASE_URL;
      dispatch({ type: ActionType.FETCH_USERREGISTRATION_REQUEST,payload:ActionType.FETCH_USERREGISTRATION_REQUEST})
      axios.get(url)
        .then((response : AxiosResponse<iuserRegistration[]>) => {
          debugger
          dispatch({
               type:  ActionType.FETCH_USERREGISTRATION_SUCESS,
               payload: response.data
            } )
          //onSuccess() */fetchCustomerSuccess(response.data)
        })
        .catch(error => {
          dispatch( {
            type: ActionType.FETCH_USERREGISTRATION_FAILURE,
            payload: error
          })
        })
    }
  }

//DELETE USRE DETAILS

  
//const BASE_URL =  
export const deleteUser = (id:any) => {
 debugger
    return (dispatch:Dispatch<Action>) => {
      
      let url =  'http://localhost:3000/users/'+id;
      dispatch({ type: ActionType.FETCH_USERREGISTRATION_REQUEST,payload:ActionType.FETCH_USERREGISTRATION_REQUEST})
      axios.delete(url)
        .then((response : AxiosResponse<iuserRegistration[]>) => {
          debugger
          dispatch({
               type:  ActionType.FETCH_USERREGISTRATION_SUCESS,
               payload: response.data
            } )
          //onSuccess() */fetchCustomerSuccess(response.data)
        })
        .catch(error => {
          dispatch( {
            type: ActionType.FETCH_USERREGISTRATION_FAILURE,
            payload: error
          })
        })
    }
  }






  //EDIT USER DETAILS
//const BASE_URL =  
export const putUser = (id:any) => {
  debugger
     return (dispatch:Dispatch<Action>) => {
       
       let url =  'http://localhost:3000/users/'+id;
       dispatch({ type: ActionType.FETCH_USERREGISTRATION_REQUEST,payload:ActionType.FETCH_USERREGISTRATION_REQUEST})
       axios.put(url)
         .then((response : AxiosResponse<iuserRegistration[]>) => {
           debugger
           dispatch({
                type:  ActionType.FETCH_USERREGISTRATION_SUCESS,
                payload: response.data
             } )
           //onSuccess() */fetchCustomerSuccess(response.data)
         })
         .catch(error => {
           dispatch( {
             type: ActionType.FETCH_USERREGISTRATION_FAILURE,
             payload: error
           })
         })
     }
   }



  //POST USER DETAILS
  //const BASE_URL = 
export const postUsers = (newData: any,onSuccess: () => void) => {
  //newRecord ,onSuccess
    return (dispatch:Dispatch<Action>) => {
      debugger
        let url = 'http://localhost:3000/users';  
      dispatch({ type: ActionType.FETCH_USERREGISTRATION_REQUEST,payload:ActionType.FETCH_USERREGISTRATION_REQUEST})
      //url, newRecord newRecord
       axios.post(url,newData)
        .then(response => {
         debugger
          dispatch( {
            type:  ActionType.FETCH_USERREGISTRATION_SUCESS,
            payload:response.data
          })
          onSuccess()
        })
        .catch(error => {
          // error.message is the error message
          dispatch( {
            type: ActionType.FETCH_USERREGISTRATION_FAILURE,
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