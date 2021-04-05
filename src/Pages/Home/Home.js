import React from "react";
import { useState } from 'react';
import "./Home.css"
import {Fall} from "../../Components/Fall/Fall"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Purse from "./purse.png";
import neck from "./neck.png"
import glasses from "./glasses.png"
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles((theme) => ({
  Cards : {
    [theme.breakpoints.down('sm')]: {
     flexDirection: "column",
    }
  }
 }))



function Home(){
    const classes = useStyles();
    const [buttons, setButtons] = useState(["MIDI PLEATED SKIRT", 
    "SALE", "VINTAGE FRAME EYEGLASSES" ])
    return(
        <div>
        <Fall />
        <div className="home-bottom-container">
            <div className="year-round-container">
            <div className="year-round">
               <Typography style={{fontSize: "40px", color: "#303132"}}>Y&nbsp; E&nbsp; A&nbsp; R &nbsp;&nbsp; R&nbsp; O&nbsp; U&nbsp; N&nbsp; D</Typography>
               <div className="vector"></div>
               <Typography variant="body2" style={{fontSize: "25px"}} > M u s t &nbsp; H a v e &nbsp; I t e m s </Typography>
               </div>
            </div>
            <div>
                <Grid container justify="center">
            <Grid className={classes.Cards} container item xs={10} justify="center" spacing={2}>
          {[neck,Purse,glasses].map((value,index) => (
            <Grid key={index} xs={4} item>
              <Card >
              <CardContent>
                <CardActionArea style={{height:"550px"}}>
                    <CardMedia image={value} style={{height:"88%", width:"100%"}} />
                    
                        <Button style={{width:"100%", height:"12%"}}>
                        {buttons[index]}
                    </Button>
                    </CardActionArea>
              </CardContent>
              </Card>
            </Grid>
          ))}
          </Grid>
          </Grid>
        </div>
        </div>
        </div>
                     
    )
  
}
                  

export {Home};