import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./index.css";
import Routepath from "./auth/user/component/login";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Routepath />, document.getElementById("root"));
=======

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Parse from "parse";
require("dotenv").config();

Parse.initialize(
  process.env.REACT_APP_PARSE_APP,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
  process.env.REACT_APP_PARSE_MASTER_KEY
);

Parse.serverURL = process.env.REACT_APP_PARSE_SERVER;

ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> dd2afcfe820a3a55c0f2b7baeb655d5d2a04c93e
registerServiceWorker();
