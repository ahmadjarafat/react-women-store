import React from "react";
import "./CustomerCare.css";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {Paragraph} from "../../Components/Paragraph/Paragraph"
import {Header2}   from "../../Components/Paragraph/Paragraph"

const useStyles = makeStyles((theme) => ({
    
}))

function CustomerCare (){


    return (
        
            <Grid container direction="column" style={{height: "1200px"}} alignItems="center" justify="center" spacing={5}>
                <Grid item>
                  <Typography variant="subtitle1">
                      C U S T O M E R &nbsp; C A R E
                  </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br />
                     fJust click “Edit Text” or double click me to add your own content and<br />
                     make changes to the font. I’m a great place for you to tell a story and<br />
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     let your users know a little more about you
                    </Typography>
                    </Grid>
                    <Grid container justify="center" item style={{width: "100%"}}>
                        <div className="vector-customer"></div>

                    </Grid>
                    <Grid item>
                  <Typography variant="subtitle1">
                      R E T U R N S
                  </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br />
                     Just click “Edit Text” or double click me to add your own content and<br />
                     make changes to the font. I’m a great place for you to tell a story and<br />
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     let your users know a little more about you
                    </Typography>
                    </Grid>
                    <Grid container justify="center" item style={{width: "100%"}}>
                        <div className="vector-customer"></div>

                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1">
                     FAQ
                  </Typography>
                    </Grid>
                    <Grid container direction="row" spacing={3} justify="center" item >
                        <Grid spacing={2} alignItems="center" container xs={4} item direction="column">
                           <Grid item>
                            <Header2 header="you provide International delivery?"/>
                            </Grid>
                            <Grid item>
                            <Paragraph  />
                           </Grid>
                           
                           <Grid item>
                           <Header2 header="How do I return an item?"/>
                           </Grid>
                           <Grid item>
                           <Paragraph  />
                           </Grid>
                           
                           <Grid item>
                           <Header2 header="What is your returns policy?"/>
                           </Grid>
                           <Grid item>
                           <Paragraph />

                           </Grid>
                        </Grid>
                        <Grid container xs={4} alignItems="center" spacing={2} item direction="column">
                           <Grid item style={{marginTop: "15px"}}>
                           <Header2 header="How do I track my order?" />
                           </Grid>
                           <Grid item>
                            <Paragraph  />

                           </Grid>
                           <Grid item>
                           <Header2 header="How can I contact your couriers?" />
                           </Grid>
                           <Grid>
                           <Paragraph />  

                           </Grid>
                           <Grid item>
                           <Header2 header= "What are your delivery options?" />
                           </Grid>
                           <Grid item>
                           <Paragraph />

                           </Grid>
                        </Grid>
                    </Grid>
                    </Grid>

                   
       
    )
}

export {CustomerCare};
                   
                    
                   
                   
                  
                   