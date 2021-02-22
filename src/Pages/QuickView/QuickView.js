import React from "react";
import Grid from '@material-ui/core/Grid';
import "./QuickView.css";
import { Typography } from "@material-ui/core";
import { useEffect} from "react";
import {useHistory} from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';


const useStyles = makeStyles((theme) => ({
 priceQuick : {
    color: theme.palette.primary,
    fontSize: "25px",
    fontWeight: "300",
 },
 title: {
   fontSize: "30px",
   color: theme.palette.secondary.dark,
 },
 fav: {
   fontSize: "30px"
 }
}))


function QuickView (props){

  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    console.log(history.location.state);
  })
  
    return(
        <Grid container justify="center" direction="row">
         <Grid style={{marginTop: "40px"}} item justify="space-between" xs={8}  container  direction="row">
          <Grid item>
           <Typography variant="subtitle2" >
          {` Home / Shop /Product`}
           </Typography>
          </Grid>
          <Grid container direction="row" justify="flex-end" alignItems="center" xs={6} item >
            <Grid item xs={2} justify="flex-end" container>
                <Grid item>
                  <Link className="quickLink">
              <NavigateBeforeIcon style={{fontSize: "30px"}} />
                  </Link>
              </Grid>
              <Grid item>
                <Link className="quickLink">
              <Typography style={{marginTop:"5px" }} variant="h1" >
                Prev
                </Typography>
                </Link>
                </Grid>
            </Grid>
             
            <Grid xs={0} style={{ margin:"0px 10px 5px 10px", height:"50%",borderLeft:"1px solid black"}} item>
               
            </Grid> 
          
         
              <Grid justify="flex-start" xs={2} item container>
              <Grid item>
                <Link className="quickLink">
              <Typography style={{marginTop: "5px"}} variant="h1" >
                Next
                </Typography>
                </Link>
                </Grid>
                <Grid item>
                  <Link className="quickLink">

                <NavigateNextIcon style={{fontSize: "30px"}} />
                  </Link>

              </Grid>
              </Grid>
          </Grid>
          </Grid>
         <Grid item justify="space-between" container xs={8}>
          <Grid xs={6} style={{marginTop: "70px"}} direction="column" item container> 
            <div className="productImage"  style={{ backgroundImage: `url("${history.location.state.clickTarget.image}")`}}>
            </div>
            <div className="productText">
            <Typography style={{fontSize: "18px"}} variant="body2">
             {history.location.state.clickTarget.text1}
            </Typography>
            </div>
          </Grid>
          <Grid xs={5} direction="column" item container>
           <Grid style={{marginTop: "70px"}} item> 
             <Typography className={classes.title} style={{fontSize: "22px"}} variant="body2">
             {history.location.state.clickTarget.text2}
             </Typography>
           </Grid>
           <Grid item style={{marginTop:"50px"}}>
          <Typography className= {classes.priceQuick}>
             {history.location.state.clickTarget.price}
          </Typography>
           </Grid>
           <Grid style={{marginTop:"30px"}} item>
             <Typography style={{fontSize: "20px"}}  variant="subtitle2">
             {`color: ${history.location.state.clickTarget.color}`}
             </Typography>
           </Grid>
           <Grid style={{marginTop: "10px"}} item>
            <FiberManualRecordIcon fontSize="large" htmlColor= {history.location.state.clickTarget.color} />
           </Grid>
           <Grid  justify="space-between" alignItems="center" container direction="row" style={{width: "100%", marginTop:"30px" }} item>
             <Grid xs={10} item>
             <Button style={{backgroundColor: "white", border:"1px solid #3C3F40", width:"100%"  }}>
               <Typography style={{fontSize: "20px"}} variant="subtitle2">
                 Add to Cart
               </Typography>
             </Button>
             </Grid>
             <Grid justify="center" alignItems="center" style={{border: "1px solid #3C3F40",height:"100%"}}  xs={2} container item>
               <Grid item>
            <FavoriteBorderIcon classes={{fontSizeInherit:classes.fav}} fontSize="inherit"  />

               </Grid>
           </Grid>
             </Grid>
              <Grid style={{width: "100%", marginTop:"15px"}} item>
              <Button style={{width: "100%"}}>
               Buy Now
              </Button>
             </Grid> 
             <Grid item style={{marginTop: "15px"}}>
             <Accordion square>
            <AccordionSummary
              expandIcon={<AddOutlinedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{fontSize: "17px"}} variant="h4" >PRODUCT INFO</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h4" style={{fontSize: "13px"}}>

              
            I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.
            </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square>
            <AccordionSummary
              expandIcon={<AddOutlinedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{fontSize: "17px"}} variant="h4" >RETURN AND REFUND POLICY</Typography>
            </AccordionSummary>
            <AccordionDetails style={{fontSize:"13px"}}>
            <Typography variant="h4" style={{fontSize: "13px"}}>
            I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
            </Typography>
            </AccordionDetails>
          </Accordion>
             </Grid>
          </Grid>
         </Grid>
         </Grid>
       
    )
}

export {QuickView};
              
            

             


