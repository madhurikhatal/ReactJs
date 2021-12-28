import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { Dispatch } from 'react'
import { string } from 'yup/lib/locale'
import* as userRegistAction from '../../../src/state/actions/userRegistrationAction/userRegistrationAction'

import * as yup from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action, ActionType } from '../../state/action-type/userRegistrationAction-Type'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
 
interface IFormInput{
    username :string;
    email :string;
    mobile :string;
    blood:string;
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const schema=yup.object().shape({
    username:yup.string().min(2).max(20).required(),  
    email:yup.string().email().required(),
   
    mobile:yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),

   
    blood:yup.string().required()
  })  

  const UserRegistration:React.FC=(props:any )  =>{
  const methods= useForm<IFormInput> ({resolver:yupResolver(schema)});
  const {register, watch,control,handleSubmit,formState:{errors} }=methods;
  let nevigate=useNavigate();
  const formSubmitHandler:SubmitHandler<IFormInput>=(data:IFormInput)=>{
    alert("call");
      console.log('data is = ',data);
        debugger
        props.postUsers(data,()=>{
          debugger
          //navigate('/signup');
         
        })
       
    };
 
    
    return (

            <Grid>
                
        <form onSubmit={handleSubmit(formSubmitHandler)}>  
         
            <Typography align='center'><h1>User Registration</h1></Typography>
      

          <Grid container spacing={5}>
            <Grid item xs={6}>
                <Controller name='username' control={control} render={({field})=>(
                <TextField {...field}label="User Name" name='username' error={!!errors.username} 
                helperText={errors.username?errors.username?.message:""} placeholder='Enter user name' fullWidth/>
                )}></Controller>
            </Grid>
                        
           <Grid item xs={6}>
          
                <Controller name='email' control={control} render={({field})=>(
                <TextField {...field}label="Email" name='email' error={!!errors.email} 
                helperText={errors.email?errors.email?.message:""} placeholder='Enter email address' fullWidth/>
                )}></Controller>
               
            </Grid>

            <Grid item xs={6}>
                <Controller name='mobile' control={control} render={({field})=>(
                <TextField {...field}label="Mobile No" name='mobile' error={!!errors.mobile} 
                helperText={errors.mobile?errors.mobile?.message:""} placeholder='Enter mobile no' fullWidth/>
                )}></Controller>
            </Grid>

             <Grid item xs={6}>
             <Controller name='blood' control={control} render={({field})=>(
             <TextField {...field}label="Blood Group" name='blood' error={!!errors.blood} 
             helperText={errors.blood?errors.blood?.message:""} placeholder='Blood group (A+)' fullWidth/>
              )}></Controller>
             </Grid>

           
             <Grid item xs={6}>
             <Button  type='submit'   color='primary' variant="contained" >Submit</Button>
             </Grid>
             <Grid item xs={6}>
             <Button type='submit'   color='primary' variant="contained">View</Button>
             </Grid>
             
          </Grid>
          
          </form>
        
        </Grid>
         
    )
}


const mapStateToProps = (state: { AuthData: any; }) => {
  debugger
  return {
      authData: state.AuthData,
 }
}

const mapActionToProps={
  postUsers:userRegistAction.postUsers 
  }

export default connect(
 mapStateToProps,
 mapActionToProps
)(UserRegistration)


//export default Signup