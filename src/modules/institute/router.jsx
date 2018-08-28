import React from "react";
import { Route, Switch } from "dva/router";

import HomeContainer from "./container/screen";

const OrderRouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/user/instute/" component={HomeContainer} />
    </Switch>
  );
};

export default OrderRouterConfig;
