import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Navbar from "./components/common/navbar/Navbar"
import Tabs from "./components/common/navbar/Tabs"
import Login from "./components/login/Login"
/* import store from "./store/index";
 */
ReactDOM.render(
  <BrowserRouter>
      <Route path="/" component={Login} />
   </BrowserRouter> 
  ,document.getElementById("App")
)