import React from "react";
import { Route, Switch } from "dva/router";

import HomeContainer from "./container/home";

const OrderRouterConfig = () => {
  console.log("here router");
  return (
    <Switch>
      <Route exact path="/user/instute/" component={HomeContainer} />
    </Switch>
  );
};

export default OrderRouterConfig;
