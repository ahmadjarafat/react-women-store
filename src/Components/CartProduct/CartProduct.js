import React from "react";
import "./CartProduct.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core";
import {useState} from "react";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  image: {
      height: "100px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"

  },
  vector: {
    borderBottom: "1px solid #D3D3D3",
    width: "100%"
    
}

}))

function CartProduct(props) {



    const classes = useStyles()
    return(
        <Grid item style={{marginTop: "30px"}} xs={12} container direction="column">
          <Grid item className={classes.vector}></Grid>
        <Grid style={{marginTop: "25px"}} xs={12} item justify="space-between" container direction="row">
        <Grid xs={8} item container direction="row" >
        <Grid item xs={4} style={{ backgroundImage: `url('${props.value.url}')`}} className={classes.image}></Grid>
        <Grid style={{marginLeft: "10px"}} container xs={7} item spacing={2} direction="column">
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
        <Grid style={{height: "px"}} xs={4} direction="row" container item justify="center">
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
          <Grid item justify="space-between" xs={3} container direction="row">
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
