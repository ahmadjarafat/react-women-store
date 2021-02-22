import { createMuiTheme } from '@material-ui/core/styles';
import { BorderTop } from '@material-ui/icons';


export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3C3F40",
      },
      secondary: {
        main: "#303132",
      },
      info:{
          main: "#D3D3D3",
      }
    },
    overrides: {
        MuiButton: {
            root: {
                backgroundColor:  '#3C3F40',
                borderRadius: 0,
                padding: '20px 5px 20px 5px',
                color: "white",
                height: "49px",
            },
                
              label: {
                fontSize: '17px',
                textTransform: "none",
              }
        },
        MuiTypography: {
          h1:{
           color: "#6C6D6D",
           fontSize: "15px"
          },
          body1:{
              fontFamily: "Times New Roman, Times, serif",
              color: "#3C3F40",
              fontWeight: "600"
          },
          body2:{
            fontFamily: 'URW Chancery',
            color: "#3C3F40",
          },
          h5:{
              fontWeight: "600",
              color: "#3C3F40"
          },
          h4:{
              color:"#7F7F7F",
              fontSize: "20px",
          },
          h3:{
              fontSize: "30px",
          },
          caption:{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "17px"
          },
          h2: {
            color: "#E3E4E4",
            fontSize: "18px"
          },
          subtitle1: {
            color: "#3C3F40",
            fontSize: "20px",
            fontWeight: "700",
          },
          subtitle2:{
            color : "#7F7F7F"
          }
        },
        MuiCardContent:{
            root:{
                padding:"0px",
                '&:last-child': {
                    paddingBottom: "0px",
                }
            },
        MuiCard:{
            root: {
                boxShadow:"none",
            }
        }
            
        },
        MuiNativeSelect:{
            select:{
                paddingLeft: "20px",
                paddingTop: "14px",
                paddingBottom: "14px"
                
            },
            iconOpen:{
                transform: "rotate(180deg)",
            }
           },
           MuiInput:{
            input: {
                fontSize: "18px",
                color: "white",
                marginLeft: "20px",
            },
            root: {
              color: "white",
            }
         }, 
         MuiSlider:{
           thumb: {
            color: "#5B5551",
            width: "20px",
            height: "20px",
            
            
           },
           track:{
            color: "#5B5551",
            marginTop: "3px",
           },
           rail:{
               marginTop: "3px"
           }
         },

         MuiAccordion:{
             root:{
                width: "100%",
                boxShadow: "none",
                borderBottom: "1px solid #EBEBEB",
                borderTop: "1px solid #EBEBEB"
             } 
         },
         MuiAccordionDetails:{
             root:{
               marginRight: "5px",
             }
         },

         MuiPaper:{
             elevation1:{
                 boxShadow: "none",
             }
         }

       
    },
    
    props: {
        MuiButton:{
           disableRipple: true
        },

        MuiPaper:{
            square: true,
        },

    MuiTypography: {
        variantMapping: {
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'div',
        },
      },
    }
    
  });