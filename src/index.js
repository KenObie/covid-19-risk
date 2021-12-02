import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import MainLayout from "layouts/MainLayout";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app" render={(props) => <MainLayout {...props} />} />
      <Redirect to="/app/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
