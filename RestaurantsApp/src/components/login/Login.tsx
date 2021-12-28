import React ,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { useForm,SubmitHandler,Controller } from 'react-hook-form';
import* as authAction from '../../../src/state/actions/authAction'
import { connect } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

 interface IFormInput{
   email:string;
   password:string ;
 }

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

  const schema=yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(4).max(20).required() 
  })
  //{ match }: RouteComponentProps<TParams>
  const Login:React.FC=(props:any)  =>{
   const methods=useForm<IFormInput>({resolver:yupResolver(schema)});
   const {register, control, handleSubmit, watch,reset, formState: { errors }}=methods;
    const classes = useStyles();
    let navigate = useNavigate();
     const formSubmitHandler:SubmitHandler<IFormInput>=(data:IFormInput)=>{
      console.log("Form data is",data);
      debugger
     
      props.postAuth(data,()=>{
        debugger
        navigate('/signup');
       
      })
      //methods.reset({email:"",password:""})
     };
    
    return (
        <>
      <form onSubmit={handleSubmit(formSubmitHandler)} >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signin
          </Typography>
       
     
      <Controller name='email' control={control} defaultValue='' 
      render={({field})=>(
        <TextField {...field} label="Email" variant="outlined" error={!!errors.email} fullWidth
        helperText={errors.email?errors.email?.message:''}
        />
      )}/> 
      <br/>
      <Controller name='password' control={control} 
      render={({field})=>(
        <TextField {...field} label="Password" fullWidth  type="password" variant="outlined" error={!!errors.password}
        helperText={errors.password?errors.password?.message:''}
        />
      )}/> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
         
        </div>
        </form>  
        </>
     

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
 )(Login)