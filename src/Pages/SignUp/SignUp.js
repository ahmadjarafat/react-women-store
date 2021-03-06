import React from "react";
import "./SignUp.css";
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
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import firebase from '../../firebase';
import {useState,useEffect} from "react";
import {Redirect} from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Pretty Gal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error:
  {
    color: "red"
  }
}));



export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, errors,reset } = useForm();
  const [key,setKey] =  useState("")
  const [userInfo,setUserInfo] = useState({
    "user Id": "",
    "first name": "",
    "last Name": "",
    "signedUp": false,
  }); 
useEffect(() => {
  if(userInfo["signedUp"])
  {
    let user = firebase.auth().currentUser;
    let uid = user.uid;
   firebase.database().ref("users").child(uid).set(userInfo);
   firebase.database().ref("users/" + uid).child("Items");
   setKey(uid);
  reset({firstName: "",
  lastName: "",
  email: "",
  password: ""})
  }
  
},[userInfo])

 const [signedUpMessage,setSignedUpMessage] = useState("");
 const [errorMessage,setErrorMessage] = useState("");
  const handleSignUp = (e) =>
{
  
  firebase.auth().createUserWithEmailAndPassword(e.email, e.password)
  .then((userCredential) => {
    let user = userCredential.user;
    setUserInfo( { 
      "first name": e.firstName,
      "last Name": e.lastName,
      "Items": {
        cartCount: 0,
        total: 0,
      },
      "signedUp": true
      })
      setSignedUpMessage("you were successfully Signed Up :)");
      setErrorMessage("");
      
  })
  .catch((error) => {
    setErrorMessage(error.message)
 
  });

 
  
 
  


  
}


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit= {handleSubmit(handleSignUp)} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={register({
                  required: 'You must provide a first name',
                })}
              />
                 {errors.firstName && (
            <div className={classes.error}>{errors.firstName.message}</div>
          )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={register({
                  required: 'You must provide a last name',
                })}

              />
                   {errors.lastName && (
            <div className={classes.error}>{errors.lastName.message}</div>
          )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register({
                    required: 'You must provide the email address!',
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'You must provide a valid email address!',
                    },
                    
                  })}
              />
               {errors.email && (
            <span className={classes.error}>{errors.email.message}</span>
          )}
            </Grid>
            <Grid item xs={12}>
              <TextField
               inputRef={register({
                required: 'You must provide the Password!',
                pattern: {
                  value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: 'the password must be at least 8 characters long including 1 number, 1 lowercase letter, 1 uppercase letter ',
                },
       })}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               {errors.password && (
            <div className={classes.error}>{errors.password.message}</div>
          )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
            {errorMessage && (
              <div style={{color: "red"}}>
                {errorMessage}
              </div>
            )}
             {signedUpMessage && (
              <div style={{color: "green"}}>
                {signedUpMessage}
              </div>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
       <Box mt={5}>
        <Copyright />
      </Box>
      {key && <Redirect
  to={{
    pathname: "/SignIn",
  }}
/>}
    </Container> 
  );
}
