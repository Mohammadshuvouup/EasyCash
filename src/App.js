import React from 'react';
import HomePage from './home';
import HomePageArabic from './home_ar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Dir direction ={directionVariable}>
    // <div className="App">
    //  <HomePage />
    // </div>
    // </Dir>
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
    
       <Route path="/home_ar" exact component={HomePageArabic} />
   
      
     </Switch>
   </Router>
    
  );
}

export default App;
