import logo from './logo.svg';
import './App.css';
import React from "react";

import {
  Switch,
  Route,
  BrowserRouter as  Router
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Arun from './Arun';
 

function App() {
  const history = createBrowserHistory();
  return (
 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Arun Yadav,Ankush and Abhishek Aayushi, Kanishk Khetarpal, Kuldeep Singh
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
    </div>
  

  );
}

export default App;
