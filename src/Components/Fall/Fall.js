import React from "react";
import "./Fall.css";
import Girl from "./girl-7.png"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    label:{
       fontSize: "24px",
    } 
})


function Fall(){
    
    const classes = useStyles();

    return (
        <div>
    <div className="fall-container" style={{backgroundImage:`url(${Girl})`}}>
        <div className="fall">
            <div className="winter">
                <div className="text-fall">
            FALL & WINTER
            </div>
             <Button style={{marginBottom:"30px", width:"260px",}} classes={{label: classes.label}}>Shop Now</Button>
            </div>
        </div>
    </div>
    <div className="footer-fall">
       F R E E  &nbsp; S H I P P I N G &nbsp; W O R L D W I D E
    </div>
    </div>
    )
}

export {Fall};
            