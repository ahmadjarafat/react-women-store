import React from "react";
import "./Header.css"
import {
    Link
  } from "react-router-dom"; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
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

  const classes = useStyles();

  
    return(
        <div className="Header-container">
            <div className="center-container">
              <h1 className="pretty-gla">
                P R E T T Y &nbsp; G A L 
              </h1>
               <div className="Navigation">
               <Link className="navLink" to="/">
                 Home
               </Link>
               <Link className="navLink" to="/shop">
                 Shop
               </Link>
               <Link className="navLink"  to="/">
               Sale
               </Link>
               <Link className="navLink" to="/CustomerCare">
               Customer Care
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
            <Typography style={{fontSize: "15px",color: "#3C3F40", marginLeft: props.cart < 10  ? "-28px" : props.cart > 10 && props.cart < 100? "-33px" : "-38px", marginBottom:"13px"}} variant="subtitle2">
               {props.cart}
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

export {Header};