import React from "react";
import "./Header.css"
import {
    Link
  } from "react-router-dom"; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import firebase from '../../firebase';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


function Header(props)
{ 
  const useStyles = makeStyles((theme) => ({
  Icon: {
    width: 50,
    height: 50,
  }, 
 button: {
  display: "flex",
  alignItems: "center",
  justifyItems: "center"
  }
  
  }))
  const theme = useTheme();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('lg'));
  const mediumScreenSize = useMediaQuery(theme.breakpoints.between('850',"md"))
  const smallScreenSize = useMediaQuery(theme.breakpoints.down('850'));
  const classes = useStyles();
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let mounted = true
    firebase.auth().onAuthStateChanged((user) => {
      if(mounted){
      if (user){
        let user = firebase.auth().currentUser;
        let uid = user.uid;
        firebase.database().ref('users/' + uid + "/Items/cartCount").on("value",function(snapshot) {
          if (snapshot.exists()){
          setCartCount(snapshot.val())
          }
          else 
          console.log("strange behaviour")
        })
      }
      } })
      return function CleanUp() {
        mounted = false;
      }},[])
      if(largeScreenSize || mediumScreenSize)
      {
    return(
        <div className="Header-container">
            <div className="center-container">
              { largeScreenSize? (
              <h1 className="pretty-gal">
                P R E T T Y &nbsp; G A L 
              </h1>) : null
      }
               <div className="Navigation">
               <Link className="navLink" to="/Home">
                 Home
               </Link>
               <Link className="navLink" to="/shop">
                 Shop
               </Link>
               <Link className="navLink"  to="/sale">
               Sale
               </Link>
            
               <Link className="navLink" to="/Stockists">
               Stockists
               </Link>

            </div>
            <Grid justifyItems="center" alignItems="center" style={{width: "150px"}} container>
              <Grid item>
            <Link className="navLink" to="/Cart"> 
            <IconButton className={classes.button} >
            <ShoppingCartIcon className={classes.Icon} htmlColor="#D3D3D3" />
            <Typography style={{fontSize: "15px",color: "#3C3F40", marginLeft: cartCount < 10  ? "-28px" : cartCount > 10 && cartCount < 100? "-33px" : "-38px", marginBottom:"13px"}} variant="subtitle2">
               {cartCount}
            </Typography>
         </IconButton>
 </Link>
              </Grid>
<Grid item>
 <Link className="navLink" to="/SignIn"> 
        <IconButton>
         <AccountCircleIcon  htmlColor= "#D3D3D3" className={classes.Icon} />

        </IconButton>
 </Link>
 </Grid>
 </Grid>
        </div>
        </div>
    )
}
else{
  return(
    <div className="page">
  <header className="headerMobile" tabIndex="0">Header</header>
  <div id="nav-container">
    <div className="bg"></div>
    <div className="button" tabIndex="0">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </div>
    <div id="nav-content" tabIndex="0">
      <ul>
        <li> <Link to="/Home">
                 Home
               </Link> </li>
        <li>  <Link to="/shop">
                 Shop
               </Link></li>
        <li>  <Link to="/sale">
               Sale
               </Link></li>
               <li>  <Link to="/Cart">
              Cart
               </Link></li>
        <li><Link to="/Stockists">
               Stockists
               </Link> </li>
               <li>  <Link to="/SignIn">
               Sing In
               </Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}
}

export {Header};