import { iSignup } from "../../Models/signup/signup";
export enum ActionType{
    FETCH_SIGNUP_REQUEST = 'FETCH_SIGNUP_REQUEST',
    FETCH_SIGNUP_SUCESS = 'FETCH_SIGNUP_SUCESS',
    FETCH_SIGNUP_FAILURE = 'FETCH_SIGNUP_FAILURE',
}
interface IfetchSignupRequest{
    type:ActionType.FETCH_SIGNUP_REQUEST,
    payload:string
}
interface IfetchSignupSuccess{
    type:ActionType.FETCH_SIGNUP_SUCESS,
    payload:iSignup[]
}
interface IfetchSignupFailure{
    type:ActionType.FETCH_SIGNUP_FAILURE,
    payload:string
}
export type Action =IfetchSignupRequest|IfetchSignupSuccess|IfetchSignupFailure