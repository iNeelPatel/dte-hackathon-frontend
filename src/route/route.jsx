import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../auth/component/login";
import Dashboard from "../dashboard/component";
const Routepath = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/user/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default Routepath;
