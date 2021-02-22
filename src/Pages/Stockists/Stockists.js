import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useState} from "react";



function Stockists(){

    const [state, setState] = useState(["Find us in these fine stores","The Blues", "500 Terry Francois Street",
"San Francisco, CA 94158", "Phone: 123.456.7890",
"Mon-Sat: 10:00am-7:00pm", "Sunday: Closed", "", "Eva", "500 Terry Francois Street",
"San Francisco, CA 94158", "Phone: 123.456.7890", "Mon-Fri: 9:00am-6:00pm","Sat-Sun: 10:00am-5:00pm"]);

function index (value) {
    if (value===1 || value===5 || value===7 || value===8 || value===12 )
    return {
        marginTop: "20px"
        
    };
     else 
     if (value===0)
     return {
         marginTop: "30px"
         
     }
    return {
        marginTop: "0px"
        
    };

}

function background (num) {
    if (num===7)
    return {
        borderBottom: "1px solid #3C3F40",
        width: "15px"

    }
    else 
    return {
        fontSize: "17px"
    }
 }


    return(
      <div>
            <Grid container justify="center" style={{height: "700px"}} alignItems="center" direction="column">
                <Grid item>
                    <Typography variant="subtitle1">
                S T O C K I S T S 

                    </Typography>
                </Grid>
             {state.map((value, ind) => (
                <Grid key={ind} style= {index(ind)} item>
                 <Typography style={background(ind)} variant="subtitle2">
                    {value}
                 </Typography>
                </Grid>
             ))}
            </Grid>
   </div>
        
    )
}

export {Stockists};