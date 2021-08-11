import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Kanishk from "./components/Kanishk";


function App() {
  return (
    <>
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
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/kanishk" component={Kanishk} />
      </Switch>
    </>
  );
}

export default App;
