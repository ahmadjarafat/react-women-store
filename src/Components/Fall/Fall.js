import React from "react";
import "./Fall.css";
import Girl from "./girl-7.png"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  
    label: {
        fontSize:"24px",
        width: "100%"
    }
}))


function Fall(){
    const theme = useTheme();
    const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'));
    const smallScreenSize = useMediaQuery(theme.breakpoints.down('500'));
    const classes = useStyles();
 
    return (
        <div>
    <div className="fall-container" style={{backgroundImage:`url(${Girl})`,height: largeScreenSize? "870px" : smallScreenSize? "500px" : "650px"}}>
         <div style={{width: largeScreenSize? "673px" : smallScreenSize? "90%" : "80%", fontSize: largeScreenSize? "60px" : smallScreenSize? "30px" :  "45px"}} className="winter">
                <div className="text-fall">
            FALL & WINTER
            </div>
             <Button style={{marginBottom:"30px", height: smallScreenSize? "70px" : "49px", width: largeScreenSize? "260px" : smallScreenSize? "85%" : "50%",position:"static"}} classes={{label: classes.label}}><Link style={{width: "100%"}} to="/shop">Shop Now</Link></Button>
            </div>
    </div>
    <div className="footer-fall">
       F R E E  &nbsp; S H I P P I N G &nbsp; W O R L D W I D E
    </div>
    </div>
    )
}

export {Fall};
            