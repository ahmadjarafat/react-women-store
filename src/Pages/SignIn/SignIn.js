import React from "react";
import "./SignIn.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom"; 
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm, Controller } from 'react-hook-form';
import firebase, { auth, provider } from '../../firebase';
import {useState,useEffect} from "react";




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [userState,setUserState] = useState("");

  const handleSignIn = (e) => {
    firebase.auth().signInWithEmailAndPassword(e.email,e.password)
  .then((userCredential) => {
    let user1 = userCredential.user;
  })
  .catch((error) => {
    console.log("hello")
    console.log(error.message)
  });

  }

  useEffect(() => {
    return function cleanUp() {
        mounted = false; 
    }
  })

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
      console.log(error.message)
    });
  }

   
  let mounted = true;
  
  firebase.auth().onAuthStateChanged((user) => {
    if (mounted){
   if (user){
     setUserState(true)
   }
   else 
   {
    setUserState(false)
   } }
  })
    if (!userState) {
      return ( <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(handleSignIn)} className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error = {errors.email}
            inputRef={register({
             required: 'Please enter your email address',
           })}
          />
            {errors.email && (
            <span className={classes.error}>{errors.email.message}</span>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({
             required: 'Please enter your password',
           })}
          />
          {errors.password && (
            <div className={classes.error}>{errors.password.message}</div>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {errorMessage && (
            <div>
              {errorMessage}
            </div>
          )}
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
              <Link to="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>)}
      if(userState) {
        
       return ( <Grid spacing={6} direction="column" container>
          <Grid item>
            jfkjkd
          </Grid>
           <Grid item>
           <Button onClick={handleSignOut}>
         Sign Out 
       </Button>
           </Grid>
         </Grid>)
    } 
  };
        
  
   
  
  
    
 
