import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { string } from 'yup/lib/locale'
import* as authAction from '../../../src/state/actions/authAction'

import * as yup from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

 
interface IFormInput{
    username :string;
    email :string;
    password:string;
    mobile :string;
    date: string;
    blood:string;
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const schema=yup.object().shape({
    username:yup.string().min(2).max(20).required(),  
    email:yup.string().email().required(),
    password:yup.string().min(5).max(10).required(),
    mobile:yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),

    date:yup.date().required(),
    blood:yup.string().required()
  })  

  const Signup:React.FC=(props:any)  =>{
  const methods= useForm<IFormInput> ({resolver:yupResolver(schema)});
  const {register, watch,control,handleSubmit,formState:{errors} }=methods;
  let nevigate=useNavigate();
  const formSubmitHandler:SubmitHandler<IFormInput>=(data:IFormInput)=>{
    alert("call");
      console.log('data is = ',data);
        debugger
        
       
    };

    
    return (

        <Grid>
        <form onSubmit={handleSubmit(formSubmitHandler)}>  
          
            <Typography align='center'><h1>Sign Up</h1></Typography>

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
             <Controller name='password' control={control} render={({field})=>(
             <TextField {...field}label="Password" type="password" name='passwrod' error={!!errors.password} 
             helperText={errors.password?errors.password?.message:""} placeholder='Enter password' fullWidth/>
              )}></Controller>
             </Grid>

             <Grid item xs={6}>
             <Controller name='mobile' control={control} render={({field})=>(
             <TextField {...field}label="Mobile No" name='mpobile' error={!!errors.mobile} 
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
                 <p>Date of Birth</p>
             <Controller name='date' control={control} render={({field})=>(
             <TextField {...field}label="" type='date' error={!!errors.date} 
             helperText={errors.date?errors.date?.message:""}  fullWidth/>
              )}></Controller>
             </Grid>
            
             <Button  type='submit' fullWidth  color='primary' variant="contained">Sign Up</Button>
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
     postAuth:authAction.postAuth 
  }

export default connect(
 mapStateToProps,
 mapActionToProps
)(Signup)


//export default Signup