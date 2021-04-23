import React from "react";
import "./Cart.css";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from "react";
import CartProduct from "../../Components/CartProduct/CartProduct"
import firebase from '../../firebase';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    vector: {
        borderBottom: "1px solid #D3D3D3",
        width: "100%"
        
    }
}))


function Cart (props){
    const theme = useTheme();
    const tabletSize = useMediaQuery(theme.breakpoints.between('750',"1100"));
    const mobileSize = useMediaQuery(theme.breakpoints.down("750"));
    const [userDataCart,setUserDataCart] = useState({userState: false,
      userItems: [],
      userCartCount: 0,
      userTotal: 0})
    useEffect(() => {
        let mounted = true
        if(mounted){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
            let user = firebase.auth().currentUser;
            let uid = user.uid;
            firebase.database().ref('users/' + uid).child("Items").on("value",function(snapshot) {
              if (snapshot.exists()){
              setUserDataCart({...userDataCart, userItems: snapshot.val()["items"], userTotal: snapshot.val()["total"], userCartCount: snapshot.val()["total"] })
              }
              else 
              console.log("strange behaviour")
            })
        }
          
          else
          {
           setUserDataCart({...userDataCart, userState: false})
          } })}
          return function CleanUp() {
            mounted = false;
          }
      },[])
    let arrayCopy = [];
    const classes = useStyles()
    if(userDataCart.userItems)
     arrayCopy = Object.values(userDataCart.userItems);
    return(
       
        <Grid container spacing={10}  justify="center" alignItems={mobileSize || tabletSize? "center" : "flex-start"} direction={tabletSize ? "column" : "row"}>
      <Grid style={{marginTop: "30px"}} item container xs= {tabletSize? 10 : mobileSize? 12 : 6}direction="column">
          <Grid item>
            <Typography style={{fontSize: "23px",color: "#5D5D5E"}} variant="h1">
             My Cart 
            </Typography>
          </Grid>
          {arrayCopy.map((value,index) => {
           
                 return <CartProduct removeAllOfOneProduct={props.removeAllOfOneProduct} removeFunction={props.removeFunction} addFunction={props.addFunction} key={index} index={index} value={value} />
})}
        </Grid>
         <Grid style={{marginTop: "30px"}} direction="column" item xs={mobileSize || tabletSize? 10 : 3}>
        <Grid item>
        <Typography style={{fontSize: "23px",color: "#5D5D5E"}} variant="h1">
            Order Summery
            </Typography>
            </Grid>
            <Grid item container style={{marginTop: "30px"}} className={classes.vector}></Grid>
            <Grid style={{marginTop: "30px"}} container direction="row" xs={12} justify="space-between" item >
                <Grid style={{marginTop: "2px"}} item>
                <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="h2">
             Subtotal
            </Typography>
                    </Grid> 
                    <Grid item>
                    <Typography style={{fontSize: "20px",color: "#5D5D5E"}} variant="body2">
                            {`$${userDataCart.userTotal}`}
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
                    {`$${userDataCart.userTotal}`}
                        </Typography>
                    </Grid>
            </Grid>
         </Grid>
      </Grid>
      
    )
}


export default Cart;