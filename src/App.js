import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Arun from './Arun';

function App() {
  return (
    <Router>  
        <Switch>
       <Route exact path="/Arun">
         <Arun></Arun> </Route>
     </Switch>
     </Router> 
  );
}

export default App;
