import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Switch,
  Route,
  BrowserRouter as  Router
} from "react-router-dom";
import { createBrowserHistory } from 'history'; 
import Arun from './Arun';
import Navbar from './Components/Navbar'

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>  
      <Router  history={history}>
      <Navbar/>
         <Switch>
       
          <Route path="/travels/arun"  component={Arun} />
          <Route path="/" exact={true} component={App}/>
        </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
