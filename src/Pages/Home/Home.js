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



function Home(){


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
            <Grid container item xs={10} justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} xs={4} item>
              <Card >
              <CardContent>
                <CardActionArea style={{height:"550px"}}>
                    <CardMedia image={Purse} style={{height:"88%", width:"100%"}} />
                    
                        <Button style={{width:"100%", height:"12%"}}>
                        {buttons[value]}
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