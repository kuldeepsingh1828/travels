import React from "react";

import {

  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Arun from './Arun';


function App() {
  return (
    <>
      <Link to={"/signup"}>Signup</Link > | &nbsp;
      <Link to={"/login"}>Login</Link >
    </>

  );
}

export default App;
