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
        height: "250px",
        marginTop: "30px",
        backgroundColor: "#303132",
        flexWrap: "nowrap",
        [theme.breakpoints.down('sm')]: {
            flexDirection:"column",
            alignItems: "center",
            height: "350px",
            },
},

gridItem1:{
    color: theme.palette.info.main,
    [theme.breakpoints.up('md')]: {
        width: "33%",
        marginTop: "30px",
        justifyContent:"space-between"
       },
       [theme.breakpoints.down('sm')]: {
        width: "70%",
        },
},
gridItem2:{
    color: theme.palette.info.main, 
    [theme.breakpoints.up('md')]: {
        flexDirection: "column",
        width: "33%",
        marginTop: "30px",
        justifyContent:"space-between"
       },
       [theme.breakpoints.down('sm')]: {
        width: "60%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            },
},
gridItem3:{
    color: theme.palette.info.main, 
    [theme.breakpoints.up('md')]: {
        flexDirection: "column",
        width: "33%",
        marginTop: "30px",
       },
    },
textField:{
    width: "100%",
    backgroundColor: "#5B5551",
},
input1: {
    [theme.breakpoints.down('sm')]: {
       width: "90%"
        },
        
    width: "65%",
    textAlign: "center"
   
},
input2: {
    width: "65%",
    marginTop: "10px",
    [theme.breakpoints.down('xs')]: {
        width: "80%"
         },
         [theme.breakpoints.between('450', '600')]: {
           width:"60%"
          },
},
button:{
    backgroundColor: theme.palette.info.main,
    width: "100%",
    height: "35px",
    color: theme.palette.primary.light,
},

}));


function Footer(){

    const classes = useStyles();
    return(
    <div>
        <Grid container alignItems="flex-start" justify="space-around" direction="row" className={classes.grid} >
        <Grid container item style={{height: "90px"}} justify="center" alignItems="center" direction="column" spacing={2} className={classes.gridItem1}>

           <Grid item>
            STAY CONNECTED
           </Grid>
           <Grid item container className={classes.socialMedia} justify="center" direction="row" alignItems="center" md={7} spacing={2} >
                  <Grid item>
                   <a href="https://www.facebook.com/ahmad.arafat.9">
                   <FacebookIcon />
                   </a>
                  </Grid >
                  <Grid item>
                  <a href="https://twitter.com/ahmad_arafat4">
                     <TwitterIcon />
                  </a>

                  </Grid>
                  <Grid>
                  <a href="https://www.pinterest.com/ahmadjarafat/_saved/">
                      <PinterestIcon />
                      </a>
                  </Grid>
                  <Grid item>
                  <a href="https://www.facebook.com/ahmad.arafat.9">
                    <InstagramIcon />
                    </a>
                  </Grid>
               </Grid>
           {/* <Grid item>
              NEED ASSISTANCE?
           </Grid> */}
           </Grid>
           <Grid container item direction="column" alignItems="center" justify="center" className={classes.gridItem2} >
             
              
                 <Grid item className={classes.input1}>
                    <TextField placeholder="Enter your email here*"/>
                 </Grid>
    
               <Grid item className={classes.input2}>
               
               <Button className={classes.button}>
                 <Typography variant="body1">Subscribe Now</Typography>  
               </Button>
               </Grid>
                
               
               </Grid>

               <Grid item  spacing={1} className={classes.gridItem3} container direction="column" alignItems="center">
                   <Grid item>

                       <Typography variant="h2">

                      +972-597156935
                       </Typography>
                   </Grid>
                   <Grid item >
                       <Typography variant="h2">
                     ahmadjarafat@gmail.com
                     </Typography>
                   </Grid>
               </Grid>


        </Grid>
    </div>
    )
}

export {Footer};