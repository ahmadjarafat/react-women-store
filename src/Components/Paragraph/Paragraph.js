import React from "react"; 
import Typography from '@material-ui/core/Typography';


function Paragraph (){
    return (
       

    <Typography variant="subtitle2">
      I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and
      make changes to the font. I’m a great place for you to &nbsp; &nbsp; &nbsp; tell a story and
      let your users know a little more about you
      </Typography>
 
     
    
    )
}

function Header2 (props){
    return(
        <Typography style={{color: "#7F7F7F", fontWeight: "300"}} variant="subtitle1">
        {props.header}
  </Typography> 
    )
}

export {Paragraph};
export {Header2};