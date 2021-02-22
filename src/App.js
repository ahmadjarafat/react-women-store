import React from "react";
import './App.css';
import {Home} from "./Pages/Home/Home"
import {theme} from "./Theme/Theme"
import { ThemeProvider } from '@material-ui/core/styles';
import {Header} from "./Components/Header/Header"
 import{ BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Shop} from "./Pages/Shop/Shop"
import {Footer} from "./Components/Footer/Footer"
import {CustomerCare} from "./Pages/CoustmerCare/CustomerCare"
import {Stockists} from "./Pages/Stockists/Stockists"
import {QuickView} from "./Pages/QuickView/QuickView"








class App extends React.Component {



  render() {
    
  
return (
    
      <Router>
        <ThemeProvider theme={theme}>
        <Header />
   <Switch>
   <Route path="/CustomerCare">
            <CustomerCare />
          </Route>
          <Route path="/quickView">
          <QuickView click = {this.state} />
          </Route>
   <Route path="/shop">
            <Shop handleClick = {this.handleClick} />
          </Route>
          <Route path="/Stockists">
            <Stockists />
          </Route>
   <Route path="/">
            <Home />
          </Route>
   </Switch>
   <Footer />
   </ThemeProvider>
    </Router>

  );
}

}

export default App;



