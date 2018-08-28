import React from "react";
import { Route, Switch } from "dva/router";

import ProfileContainer from "./container/screen";

const OrderRouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/user/profile/" component={ProfileContainer} />
    </Switch>
  );
};

export default OrderRouterConfig;
