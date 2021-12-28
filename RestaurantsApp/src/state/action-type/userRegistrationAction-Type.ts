//import { iSignup } from "../../Models/signup/signup";
import { iuserRegistration } from "../../Models/userRegistration/userRegistration"
export enum ActionType{
    FETCH_USERREGISTRATION_REQUEST = 'FETCH_USERREGISTRATION_REQUEST',
    FETCH_USERREGISTRATION_SUCESS = 'FETCH_USERREGISTRATION_SUCESS',
    FETCH_USERREGISTRATION_FAILURE = ' FETCH_USERREGISTRATION_FAILURE',
}
interface IfetchUserregistrationRequest{
    type:ActionType.FETCH_USERREGISTRATION_REQUEST,
    payload:string
}
interface IfetchUserregistrationSuccess{
    type:ActionType.FETCH_USERREGISTRATION_SUCESS,
    payload:iuserRegistration[]
}
interface IfetchUserregistrationFailure{
    type:ActionType.FETCH_USERREGISTRATION_FAILURE,
    payload:string
}
export type Action =IfetchUserregistrationRequest|IfetchUserregistrationSuccess|IfetchUserregistrationFailure