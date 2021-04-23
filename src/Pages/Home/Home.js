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
import dress from "./dress.png"
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
 

const useStyles = makeStyles((theme) => ({
  Cards : {
    [theme.breakpoints.up('lg')]: {
      flexDirection: "row",
      width: "80%"
     },
    [theme.breakpoints.down('lg')]: {
      flexDirection: "row",
      width: "100%"
     },
    [theme.breakpoints.down('md')]: {
     flexDirection: "column",
     width: "85%"
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      width: "100%"
     },
     [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      width: "100%",
      
     
     }
  },
  Card : {
    
    [theme.breakpoints.up('md')]: {
      width: "33%",
     
     },
     [theme.breakpoints.between('0',"629")]: {
      width: "98%",
     
     },
      [theme.breakpoints.between('630','sm')]: {
       width: "60%",
      },
    }
 }));



function Home(){
    const theme = useTheme();
    const classes = useStyles();
    const [buttons, setButtons] = useState(["MIDI PLEATED SKIRT", 
    "SALE", "VINTAGE FRAME EYEGLASSES" ])
    const mobileSize = useMediaQuery(theme.breakpoints.down('502'));
    return(
        <div>
        <Fall />
        <div className="home-bottom-container">
            <div className="year-round-container">
            <div style={{height: mobileSize? "200px" : "160"}} className="year-round">
              <Grid container alignItems="center" justify= "center" spacing={mobileSize? 0: 4} direction={mobileSize? "column" : "row" }>
                <Grid style={{marginLeft:mobileSize ? "0px" : "50px"}} item>
              <Typography style={{fontSize: "40px", color: "#303132"}}>Y&nbsp; E&nbsp; A&nbsp; R</Typography>
              </Grid>
              <Grid item>
              <Typography style={{fontSize: "40px", color: "#303132"}}>R&nbsp; O&nbsp; U&nbsp; N&nbsp; D</Typography>
              </Grid>
              </Grid>
               
               <div className="vector"></div>
               <Typography variant="body2" style={{fontSize: "25px"}} > M u s t &nbsp; H a v e &nbsp; I t e m s </Typography>
               </div>
            </div>
            <div>
                <Grid container justify="center">
            <Grid className={classes.Cards} container item alignItems="center" justify="center" spacing={2}>
          {[neck,Purse,dress].map((value,index) => (
            <Grid style={{position:"relative"}} key={index} className={classes.Card} item>
              <Card >
              <CardContent>
                <CardActionArea style={{height:"550px"}}>
                    <CardMedia className={classes.cardMedia} image={value} style={{height:"88%", width:"100%"}} />
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