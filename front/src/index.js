import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/main/Main";
/* import store from "./store/index";
 */
ReactDOM.render(
  <BrowserRouter>
      <Route path="/" component={Main} />
   </BrowserRouter> 
  ,document.getElementById("App")
)