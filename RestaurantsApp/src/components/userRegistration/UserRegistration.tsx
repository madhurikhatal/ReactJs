import { yupResolver } from '@hookform/resolvers/yup'
import { Button, ButtonGroup, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import React, { Dispatch, useEffect, useState } from 'react'
import { string } from 'yup/lib/locale'
import* as userRegistAction from '../../../src/state/actions/userRegistrationAction/userRegistrationAction'

import * as yup from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action, ActionType } from '../../state/action-type/userRegistrationAction-Type'
import axios from 'axios'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
 
interface IFormInput{
    id:number;
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

  // const Users =({classes,...props})=>{
    
    
  //   const [currentId, setCurrentId] = useState(0); 

  //   useEffect(() => {
  //           //debugger
  //           //alert("call fetchAllDCandidates");
  //         props.fetchAllUsers();
  //        console.log( "useEffect : =>"+JSON.stringify(props));
  //   },[])
   /* const UserReg = (props:any) => {
    debugger
   let usersList=props.usersList.users
   console.log(usersList)
    
    }
*/
  const UserRegistration:React.FC=(props:any )  =>{
  const methods= useForm<IFormInput> ({resolver:yupResolver(schema)});
  const {register, watch,control,handleSubmit,formState:{errors} }=methods;
      let nevigate=useNavigate();
        useEffect(()=>{
          debugger
          props.getAllUsers();
      },[]);
    
  const handleDelete =(data:IFormInput) =>{
    // dispatch(delete());
    debugger
    props.deleteUser(data.id,()=>{
    debugger
    })
  }
  const Edit=((data:IFormInput) =>{
    debugger
    props.putUser(data,()=>{ 
      alert("Data is rady to edit");
      debugger
    })
    
  })

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
      
            <Paper elevation={20}>
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
             {/* <Grid item xs={6}>
               <Button  color='secondary' variant="contained">Cancle</Button>
             </Grid> */}
            
          </Grid>
          </Paper>
          </form>
          <Grid>
         <h3>User data</h3>
          <hr></hr>
          <TableContainer>
          <Table>
              <TableHead>
               
                <TableRow>
                  
                  <TableCell>UserName</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Blood Group</TableCell>
                </TableRow>
              </TableHead>
               <TableBody>
              {
                  props.usersList.users.Length==0 ? "Data not Found": props.usersList.users.map((data:IFormInput,index:any)=>{                                        {/* UserRegistration.length===0 ? "Loading " : props.IFormInput.users.map((users:any) =>( */}
                     return(  
                     <TableRow key={index}> 
                      <TableCell>{data.username}</TableCell> 
                      <TableCell>{data.email}</TableCell> 
                      <TableCell>{data.mobile}</TableCell> 
                      <TableCell>{data.blood}</TableCell>  
                      <ButtonGroup>
                        <Button color="default"style={{marginRight:"5px"}} variant='contained' onClick={() => Edit(data)}>Edit</Button>  
                        <Button color="secondary" variant='contained' onClick={()=> handleDelete(data)}>Delete</Button>
                        
                      </ButtonGroup>   
                      </TableRow>
                     )}
                  )
              }
             </TableBody> 
            </Table>
          </TableContainer>
       
             
        </Grid>
        </Grid>  
    )
}


const mapStateToProps = (state: { AuthData: any; usersList: any }) => {
  debugger
  return {
      authData: state.AuthData,
      usersList:state.usersList
 }
}

const mapActionToProps={
  postUsers:userRegistAction.postUsers ,
  getAllUsers:userRegistAction.getAllUsers,
  deleteUser:userRegistAction.deleteUser,
  putUser:userRegistAction.putUser
  }

export default connect(
 mapStateToProps,
 mapActionToProps
)(UserRegistration)



function dispatch(arg0: boolean) {
  throw new Error('Function not implemented.')
}
//export default Signup