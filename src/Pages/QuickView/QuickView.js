import React from "react";
import Grid from '@material-ui/core/Grid';
import "./QuickView.css";
import { Typography } from "@material-ui/core";
import { useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import firebase from '../../firebase.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



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
 },
 select: {
   marginLeft: "0px",
   color: "#7F7F7F",
   fontSize: "20px"
 },

}))


function QuickView (props){
  const theme = useTheme();
  const TabletSize = useMediaQuery(theme.breakpoints.between('650',"1100"));
  const mobileSize = useMediaQuery(theme.breakpoints.down('650'));
  let history = useHistory();
  const classes = useStyles();
  const [quantity, setQuantity ] = useState(1);
  const [select,setSelect] = useState("Large");
  const [currentProduct, setCurrentProduct] = useState(history.location.state.index);
  const [currentState,ii] = useState(history.location.state)
  const [color, setColor] = useState(history.location.state.color);
  const [valid,setValid] = useState(false);
  const [shop,setShop] = useState(false);
  useEffect(() => {
    let mounted = true
    firebase.auth().onAuthStateChanged((user) => {
      if(mounted){
        if (user) {
          setValid(true)
        }
        else 
        setValid(false)
      }
    })
    return function CleanUp() {
      mounted = false;
    }
  },[])
  
  const handleIncrement = (e) => {
    if (e.target.value <= 10 )
     setQuantity(e.target.value)
  }

  const handleSelect = (e) => {
    setSelect(e.target.value);
  }

  const handleNext = (e) => {
    if(currentProduct !== 24)
    {
      history.push("quickView",{...currentState, index: currentState["index"]+3})
      setCurrentProduct(currentProduct+3)
    }
    
  }

  const handleAddToCart = () => {
    setShop(true);
  }
  
  const handlePrevious = (e) => {
    if (currentProduct !== 0)
    {
      history.push("quickView", {...currentState, index: currentState["index"]-3} )
      setCurrentProduct(currentProduct-3)
    }
  }
 
  
    return(
          
        <Grid container alignItems="center" justify="center" direction="column">
          {mobileSize || TabletSize ?  ( <Grid container style={{height:"200px",marginTop:"60px"}} justify="space-around" alignItems="center" direction="row" xs="9">
            <Grid item xs={5}>
            <Button style={{width:"100%"}} onClick={handlePrevious} className="quickLink">
              prev product
            </Button>
           </Grid>
           <Grid item xs={5}>
            <Button style={{width:"100%"}} onClick={handleNext} className="quickLink">
              Next Product
            </Button>
            </Grid>
           </Grid> ) 
          : ( <Grid style={{marginTop: "40px"}} item justify="space-between" xs={8}  container  direction="row">
          <Grid item>
           <Typography variant="subtitle2" >
          {` Home / Shop /Product`}
           </Typography>
          </Grid>
          <Grid container direction="row" justify="flex-end" alignItems="center" xs={6} item >
            <Grid item xs={3} justify="flex-end" container>
                <Grid xs={5} item>
                  <Button style={{minWidth:"0px",backgroundColor:"transparent"}}  onClick={handlePrevious} className="quickLink">
              <NavigateBeforeIcon style={{fontSize: "30px",color: "#6C6D6D"}} />
                  </Button>
              </Grid>
              <Grid xs={5} item>
           <Button style={{minWidth:"0px",backgroundColor:"transparent"}} onClick={handlePrevious} className="quickLink">
              <Typography style={{color: "#6C6D6D" }} variant="h1" >
                Prev
                </Typography>
                </Button>
                </Grid>
            </Grid>
             
            <Grid style={{ margin:"0px 10px 5px 10px",width: "0px" , height:"50%",borderLeft:"1px solid black"}} item>
               
            </Grid> 
          
         
              <Grid justify="flex-start" xs={4} item container>
              <Grid item>
                <Button style={{minWidth:"0px",backgroundColor:"transparent"}}  onClick={handleNext} >
              <Typography style={{color: "#6C6D6D"}} variant="h1" >
                Next
                </Typography>
                
                </Button>
                </Grid>
                <Grid item>
                <Button style={{minWidth:"0px",backgroundColor:"transparent"}}  onClick={handleNext} >
             <NavigateNextIcon style={{fontSize: "30px",color: "#6C6D6D"}} />
                </Button>
              </Grid>
              </Grid>
          </Grid>
          </Grid>)}
         
         <Grid item justify={TabletSize || mobileSize? "center" : "space-between"} alignItems="center" direction={TabletSize || mobileSize? "column" : "row"}  container xs={TabletSize? 9 : mobileSize? 12 : 8} >
          <Grid justify="center" alignItems="center" xs={TabletSize? 10 : mobileSize? 11 : 6} style={{marginTop: "70px"}} direction="column" item container> 
            <div className="productImage"  style={{ backgroundImage: `url("${history.location.state.dataObject[currentProduct].image.sizes[2].url}")`,width: mobileSize? "100%": "100%", backgroundPositionX: mobileSize? "35%" : "center"}}>
            </div>
            <div  className="productText">
            <Typography style={{fontSize: "18px"}} variant="body2">
             {history.location.state.dataObject[currentProduct].shortDescription}
            </Typography>
            </div>
          </Grid>
          <Grid xs={TabletSize? 10 : mobileSize?11 : 5} direction="column" item container>
           <Grid style={{marginTop: "70px"}} item> 
             <Typography className={classes.title} style={{fontSize: "22px"}} variant="body2">
             {history.location.state.dataObject[currentProduct].image.caption}
             </Typography>
           </Grid>
           <Grid item style={{marginTop:"50px"}}>
          <Typography className= {classes.priceQuick}>
             {history.location.state.dataObject[currentProduct].maximumPriceString}
          </Typography>
           </Grid>
           <Grid style={{marginTop:"30px"}} item>
             <Typography style={{fontSize: "20px"}}  variant="subtitle2">
             {`color: ${color}`}
             </Typography>
           </Grid>
           <Grid style={{marginTop: "10px"}} item>
            <FiberManualRecordIcon fontSize="large" htmlColor= {color} />
           </Grid>
           <Grid item style={{marginTop: "20px"}}>
               <FormControl className={classes.formControl}>
        <NativeSelect
          classes={{
            select :classes.select,
            
          }}
          inputProps={{ 'aria-label': 'age' }}
          IconComponent={ExpandMoreIcon}
          value={select}
          onChange={handleSelect}
        >
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
       

        </NativeSelect>
      </FormControl>
               </Grid>
           <Grid style={{marginTop: "15px"}} item>
           <FormControl error={!valid&&shop}>
        <InputLabel classes={{error: classes.inputError}} style={{fontSize: "20px"}} htmlFor="component-helper">Quantity</InputLabel>
        <Input
          id="component-helper"
          inputProps={{ type: "number", min:"1", max:"10", style: {
            color: "#3C3F40",
          } }}
          onChange={handleIncrement}
          value= {quantity}
        />
         </FormControl>
         { !valid&&shop&& (<Grid style={{color: "red"}} item>
           please sign in to start shopping!
         </Grid>)}
           </Grid>
           <Grid  justify="space-between" alignItems="center" container direction="row" style={{width: "100%", marginTop:"35px", height:"50px" }} item>
             <Grid xs={10} style={{height: "50px"}} item>
             <button className= {`MuiButtonBase-root MuiButton-root MuiButton-text`} onClick={() => {props.add({
               quantity: quantity,
               size: select,
               price: history.location.state.dataObject[currentProduct].maximumPriceString,
               color: color === "" ? "any" : color,
               url: history.location.state.dataObject[currentProduct].image.sizes[2].url,
               caption: history.location.state.dataObject[currentProduct].image.caption,
             })
             handleAddToCart();  
             }} style={{backgroundColor: "white", border:"1px solid #3C3F40", width:"100%",height: "100%"  }}>
               <span className= {`MuiButton-label`}>
               <div style={{fontSize: "20px", color: "#7F7F7F"}}>
               Add to Cart
                 </div>  
               </span>
                
             </button>
             </Grid>
             <Grid justify="center" alignItems="center" style={{border: "1px solid #3C3F40",height:"100%"}}  xs={2} container item>
               
            <Checkbox icon={<FavoriteIcon  fontSize="large"  />} checkedIcon={<FavoriteIcon fontSize="large" htmlColor="red" />} />

               
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
               
              

            

             


