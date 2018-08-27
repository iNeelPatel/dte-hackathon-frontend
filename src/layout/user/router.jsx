import React from "react";
import { Route, Switch } from "dva/router";
import DashboardLayout from "../../modules/dashboard/container/layout";
import InstituteContiner from "../../modules/institute/container/screen";
import profileContainer from "../../modules/profile/container/screen"

const UserRouterConfig = props => (
  <Switch>
    <Route
      exact
      path={`${props.match}/dashboard/`}
      component={DashboardLayout}
    />
    <Route path={`${props.match}/institute/`} component={InstituteContiner} />
    <Route path={`${props.match}/profile/`} component={profileContainer} />
  </Switch>
);

export default UserRouterConfig;
