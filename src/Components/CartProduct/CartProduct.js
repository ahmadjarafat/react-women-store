import React from "react";
import "./CartProduct.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  imageCartProduct: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"

  },
  vector: {
    borderBottom: "1px solid #D3D3D3",
    width: "100%"
    
}

}))

function CartProduct(props) {
    
        const theme = useTheme();
        const tabletSize = useMediaQuery(theme.breakpoints.between('750',"1100"));
        const mobileSize = useMediaQuery(theme.breakpoints.down('750'));
        const intermediateSize =  useMediaQuery(theme.breakpoints.between('850',"1100"));
        const intermediateSize2 =  useMediaQuery(theme.breakpoints.between('500',"750"));
        const classes = useStyles()

    return(
        <Grid item style={{marginTop: "30px"}} xs={12} container direction="column">
          <Grid item className={classes.vector}></Grid>
        <Grid style={{marginTop: "25px"}} xs={12} item justify={mobileSize? "center" : "space-between"} container direction={mobileSize? "column-reverse" : "row"}>
        <Grid xs={mobileSize? 6 : 8} item container style={{display:mobileSize? "block" : "flex",alignSelf: mobileSize? "center" : "auto"}} direction={"row"} >
        <Grid item xs={mobileSize? 12 : 4} style={{ backgroundImage: `url('${props.value.url}')`,height: mobileSize || tabletSize? "200px" : "180px"}} className={classes.imageCartProduct}></Grid>
        <Grid style={{marginLeft: "10px"}} container xs={intermediateSize? 5 : mobileSize? 12 : 7} item spacing={2} direction="column">
        <Grid item>
            <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="h2">
         {props.value.caption}

            </Typography>
        </Grid>
        <Grid item>
       <Typography style={{fontSize: "15px"}} variant="h4">
         {props.value.price}
       </Typography>
        </Grid>
        <Grid item>
            <Typography style={{fontSize: "15px"}} variant="h4">
            {`Color: ${props.value.color}`} 

            </Typography>
        </Grid>
        <Grid item>
            <Typography style={{fontSize: "15px"}} variant="h4">
            {`Size: ${props.value.size}`} 

            </Typography>
        </Grid>
        <Grid  xs={intermediateSize2? 4 : mobileSize? 6 : 4} direction="row" container item justify="center">
         <Grid xs={4} item>
          <Button onClick={() => {props.removeFunction(props.value.size,props.value.url,props.value.price)}} style={{width:"100%",minWidth: "0px",height:"30px"}}>
      -
          </Button>
         </Grid>
         <Grid xs={4} item>
          <Button style={{width:"100%",minWidth: "0px",height:"30px"}}>
             {props.value.countItem}
          </Button>
         </Grid>
         <Grid xs={4} item>
          <Button onClick={() => {props.addFunction(props.value.size,props.value.url,props.value.price)}} style={{width:"100%",minWidth: "0px",height:"30px"}}>
              +
          </Button>
         </Grid>
      </Grid>
        </Grid>
        </Grid>
          <Grid item style={{alignSelf: mobileSize? "center" : "auto"}} justify={mobileSize? "space-around" : "space-between"} xs={mobileSize? 12 : 3} container direction="row">
              <Grid item>
                  <Typography style={{fontSize: "20px",marginTop: "9px",color: "#5D5D5E"}} variant="body2">
              {`$${parseFloat((props.value.countItem*(parseFloat(props.value.price.replace("$","")))).toFixed(2))}`}

                  </Typography>
              </Grid>
          <Grid item>
              <Button onClick={() => props.removeAllOfOneProduct({size:props.value.size,url:props.value.url,count:props.value.countItem,price: props.value.price})} style={{color: "#7F7F7F",backgroundColor: "white"}}>
              <CloseIcon/>
              </Button>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
    )
}

export default CartProduct;
