import React from "react";
import App from "../../App";
import "./Cart.css";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from "react";
import CartProduct from "../../Components/CartProduct/CartProduct"


const useStyles = makeStyles((theme) => ({
    vector: {
        borderBottom: "1px solid #D3D3D3",
        width: "100%"
        
    }
}))


function Cart (props){

    const classes = useStyles()
    let arrayCopy = props.info.items;
    return(
       
        <Grid container spacing={10}  justify="center" direction="row">
      <Grid style={{marginTop: "30px"}} item container xs={6} direction="column">
          <Grid item>
            <Typography style={{fontSize: "23px",color: "#5D5D5E"}} variant="h1">
             My Cart 
            </Typography>
          </Grid>
          {arrayCopy.map((value,index) => {
           
                 return <CartProduct removeAllOfOneProduct={props.removeAllOfOneProduct} removeFunction={props.removeFunction} addFunction={props.addFunction} key={index} index={index} value={value} />
})}
        </Grid>
         <Grid style={{marginTop: "30px"}} direction="column" item xs={3}>
        <Grid item>
        <Typography style={{fontSize: "23px",color: "#5D5D5E"}} variant="h1">
            Order Summery
            </Typography>
            </Grid>
            <Grid item style={{marginTop: "30px"}} className={classes.vector}></Grid>
            <Grid style={{marginTop: "30px"}} container direction="row" xs={12} justify="space-between" item >
                <Grid style={{marginTop: "2px"}} item>
                <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="h2">
             Subtotal
            </Typography>
                    </Grid> 
                    <Grid item>
                    <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="body2">
                            {`$${props.info.total}`}
                        </Typography>
                    </Grid>
            </Grid>

            <Grid style={{marginTop: "15px"}} container direction="row" xs={12} justify="space-between" item >
                <Grid style={{marginTop: "2px"}} item>
                <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="h2">
                Shipping 
            </Typography>
                    </Grid> 
                    <Grid item>
                    <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="body2">
                            FREE
                        </Typography>
                    </Grid>
            </Grid>
            <Grid item>
            <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="h2">
                Palestine
            </Typography>
            </Grid>
            <Grid item style={{marginTop: "30px"}} className={classes.vector}></Grid>
            <Grid style={{marginTop: "15px"}} container direction="row" xs={12} justify="space-between" item >
                <Grid style={{marginTop: "2px"}} item>
                <Typography style={{fontSize: "25px",color: "#5D5D5E"}} variant="h2">
               Total
            </Typography>
                    </Grid> 
                    <Grid item>
                    <Typography style={{fontSize: "25px",color: "#5D5D5E"}} variant="body2">
                    {`$${props.info.total}`}
                        </Typography>
                    </Grid>
            </Grid>
         </Grid>
      </Grid>
      
    )
}


export default Cart;