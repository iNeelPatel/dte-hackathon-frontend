import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routepath from "./auth/user/component/login";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Routepath />, document.getElementById("root"));
registerServiceWorker();
