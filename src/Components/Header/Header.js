import React from "react";
import "./Header.css"
import {
    Link
  } from "react-router-dom";
  
  

function Header()
{
    return(
        <div className="Header-container">
            <div className="center-container">
              <h1 className="pretty-gla">
                P R E T T Y &nbsp; G A L 
              </h1>
               <div className="Navigation">
               <Link to="/">
                 Home
               </Link>
               <Link to="/shop">
                 Shop
               </Link>
               <Link  to="/">
               Sale
               </Link>
               <Link  to="/CustomerCare">
               Customer Care
               </Link>
               <Link  to="/Stockists">
               Stockists
               </Link>
            </div>
            
            <div className="Icons">
hello 
               </div>
        </div>
        </div>
    )
}

export {Header};