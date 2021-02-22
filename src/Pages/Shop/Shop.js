import React from "react";
import "./Shop.css";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect} from "react";
import Slider from '@material-ui/core/Slider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Link } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from '@material-ui/core/FormGroup';





const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 260,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      
    },
    filter:{
        color: theme.palette.secondary.light,
        marginTop: "20px"
    },
    product:{
        marginTop: "10px",
    },
    price: {
      color: "#7F7F7F"
  },
  select: {
    color: "#7F7F7F",
    marginLeft: "0px"
  }
  }));

  



function Shop(props){


    const classes = useStyles();  

      const [data, setData] = useState({});
      const [value, setValue] = useState([0,50]);
      const [check, setCheck] = useState({"Red": false,
      "Black": false,
      "Brown": false,
      "Green": false,
      "Off White": false,
       "Purple": false})

       const checkFalse = {
        "Red": false,
        "Black": false,
        "Brown": false,
        "Green": false,
        "Off White": false,
        "Purple": false,
        "" : true,
       }
       const [color, setColor] = useState("")
      
   useEffect(() => {
    requestApi(value[0]+".01", value[1]+".00",color)

  },[color,value])


  

  const handleChangeSelect = (event, newValue) => {
    let sliderValue = [];
    if(newValue[1]-newValue[0] === 1)
      sliderValue = [0,50];
      else
      sliderValue = newValue;
    setValue(sliderValue);  

  };

  const handleChangeCheck = (e) => {
    setColor(e.target.name);
    setCheck({...checkFalse, [e.target.name]: !check[e.target.name] });
    }
      
   

 

  function requestApi (min,max,color){
    let url = `https://api2.shop.com/AffiliatePublisherNetwork/v2/products?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&term=Clothes%20Women%20${color}&start=1&perPage=25&priceRangeId=%5B${min}%20TO%20${max}%5D&onlyMaProducts=false`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = 'json';
    
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("api_Key", "00a8e96a57764b418065c21e0c6da3b4");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          let responseObj = xhr.response;
          setData(responseObj);
       }};

      xhr.send();
      
     
  }
      
        
    

   

    return(
        <div className="shop-container">
         <div className="shop-header">
         <Typography color="primary" variant="h5">S H O P</Typography>

         </div>
        <Grid container direction="row" justify="center" spacing={5}>
         <Grid container item direction="column" xs={3} spacing={3}>
             <Grid item>
               <Typography variant="h3" className={classes.filter}>
                Filter by
               </Typography>
             </Grid>

           <Grid item>
           
           <div>
               <Accordion square>
            <AccordionSummary
              expandIcon={<AddOutlinedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4" >Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
    
             <Grid container direction="column" spacing={2}>
                 <Grid>
              <Slider
            value={value}
            onChange={handleChangeSelect}
            aria-labelledby="range-slider"
            min= {0}
            max= {50}
            disabled= {value[1]-value[0] === 1 ? true: false}

          />
          </Grid>
    
           <Grid container direction="row" justify="space-between" item >
                   <Grid item>
                        <div className={classes.price}>
                          ${value[0]}
                        </div>
                    
                   </Grid>
                   <Grid item>
                     <div className={classes.price}>
                       ${value[1]}
                     </div>
    
                   </Grid>
                   </Grid>
                   </Grid>
            </AccordionDetails>
          </Accordion>
          
        </div>

          
           </Grid>
           
           <Grid item>
           
           <div>
               <Accordion square>
            <AccordionSummary
              expandIcon={<AddOutlinedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4" >Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup row="true" >
              {[["Black","#1a1a1a"],["Brown","#8e2525"],["Green", "#248f24"],["Off White","Off White"],["Purple","#660066"],["Red","#b30000"]].map((value) => (
                 <FormControlLabel
                 control={<Checkbox onChange={handleChangeCheck} checked={check[value[0]]} icon={<FiberManualRecordIcon fontSize="large" htmlColor={value[1]} />} checkedIcon={<RadioButtonUncheckedIcon fontSize="large" htmlColor={value[1]} />} name= {value[0]} />}
               />
              ) )}
              </FormGroup>
               
            </AccordionDetails>
          </Accordion>
          
        </div>

          
           </Grid>
           </Grid>
           <Grid container item xs={8} alignItems="flex-end" direction="column" spacing={6}>

               <Grid item>
               <FormControl className={classes.formControl}>
        <NativeSelect
          classes={{
            select :classes.select,
            
          }}
          inputProps={{ 'aria-label': 'age' }}
          IconComponent={ExpandMoreIcon}
        >
          <option value="">Sort by</option>
          <option value={10}>Newest</option>
          <option value={20}>Price (low to high)</option>
          <option value={30}>Price (high to low)</option>
          <option>Name A-Z</option>
          <option>Name Z-A</option>

        </NativeSelect>
      </FormControl>
               </Grid>
           

           <Grid container item justify="space-between" spacing={2}>
            
              {[0,3,6,9,12,15,18,21,24].map((value) => (
                <Grid className={`card${value}`} key={value} xs={4} item>
                 <Link to={() => {
                  const cardDescription = data.products && data.products[value].shortDescription;
                  const cardImage = data.products&&data.products[value].image.sizes[2].url;
                  const cardPrice = data.products && data.products[value].maximumPriceString;
                  const cardCaption = data.products&&data.products[value].image.caption;
                  const cardColor = color;
                   return {
                     pathname: "/quickView",
                     state: { clickTarget: {
                      text1 : cardDescription,
                      image : cardImage,
                      price : cardPrice,
                      text2: cardCaption,
                      color: cardColor,
                      
                       
                     } }
                  }}} >
          
                   <Card>
                       <CardContent>
                           <CardActionArea>
                               <CardMedia image={data.products&&data.products[value].image.sizes[2].url} style={{height: "300px"}}>
                                 
                               </CardMedia>
                           </CardActionArea>
                       </CardContent>
                   </Card>
                   </Link>
                   <Grid container className={classes.product} direction="column" alignItems="flex-start" spacing={1}>
                               <Grid item>
                             <Typography variant="h4" style={{fontSize: "17px"}}>
                                 {data.products && data.products[value].image.caption}
                             </Typography>
                             </Grid>
                             <Grid item>
                             <Typography className={classes.price} style={{fontsize:"15px"}}>
                                 {data.products && data.products[value].maximumPriceString}
                             </Typography>
                             </Grid>
                             </Grid>
                     
                </Grid>
            ))}
           </Grid>
          
           </Grid>
        </Grid>

        </div>
    )
}

export {Shop};


