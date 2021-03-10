import React from "react";
import "./Header.css"
import {
    Link
  } from "react-router-dom"; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from "@material-ui/core";

function Header(props)
{ 
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
            <Link style={{marginTop: "16px"}} className="navLink" to="/Cart">
            <div className="Icons">
            <Typography style={{fontSize: "20px",color: "#D3D3D3"}} variant="subtitle2">
               {props.cart}
            </Typography>
            <ShoppingCartIcon fontSize="large" />
               </div>
               </Link>
        </div>
        </div>
    )
}

export {Header};