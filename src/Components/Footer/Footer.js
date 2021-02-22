import React from "react";
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

grid:{
        width: "100%",
        height: "350px",
        marginTop: "30px",
        backgroundColor: "#303132",
},
gridItem1:{
    width: "70%",
    color: theme.palette.info.main,
    marginTop: "30px",
},
gridItem2:{
    width: "70%",
    color: theme.palette.info.main, 
    marginTop: "40px"
},
textField:{
    width: "100%",
    backgroundColor: "#5B5551",
    
},
input1: {
    width: "65%",
   
},
input2: {
    width: "65%",
    marginTop: "10px",
      
   
},
button:{
    backgroundColor: theme.palette.info.main,
    width: "100%",
    height: "35px",
    color: theme.palette.primary.light,
}

}));


function Footer(){

    const classes = useStyles();
    return(
    <div>
        <Grid container alignItems="center" direction="column" className={classes.grid} >

        <Grid container item justify="space-between" className={classes.gridItem1}>

           <Grid item>
            STAY CONNECTED
           </Grid>
           <Grid item>
              BE OUR FRIEND
           </Grid>
           <Grid item>
              NEED ASSISTANCE?
           </Grid>
           </Grid>
           <Grid container item direction="row" justify="space-between" className={classes.gridItem2} >
               <Grid item container alignItems="center" spacing={2} xs={2} >
                  <Grid item> 
                   <FacebookIcon />
                  </Grid >
                  <Grid item>
                     <TwitterIcon />
                  </Grid>
                  <Grid>
                      <PinterestIcon />
                  </Grid>
                  <Grid item>
                    <InstagramIcon />
                  </Grid>
               </Grid>
               <Grid item container direction="column" alignItems="flex-end" xs={6}>
                 <Grid item className={classes.input1}>
                    <TextField placeholder="Enter your email here*"/>
                 </Grid>
    
               <Grid item className={classes.input2}>
               
               <Button className={classes.button}>
                 <Typography variant="body1">Subscribe Now</Typography>  
               </Button>
                
               </Grid>
               </Grid>

               <Grid item xs={4} spacing={1} container direction="column" alignItems="flex-end">
                   <Grid item>

                       <Typography variant="h2">

                      123-456-789
                       </Typography>
                   </Grid>
                   <Grid item >
                       <Typography variant="h2">
                     info@mysite.com
                     </Typography>
                   </Grid>
               </Grid>


           </Grid>
        </Grid>
    </div>
    )
}

export {Footer};