import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { message } from "antd";
import Parse from "parse";

import DashboardHomeComponent from "../components/home";

class DashboardHomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    Parse.User.logOut()
      .then(() => {
        this.props.dispatch(routerRedux.push({ pathname: "/" }));
      })
      .catch(error => message.error(error.message));
  }

  render() {
    console.log("here");
    return <DashboardHomeComponent handleLogout={this.handleLogout} />;
  }
}

DashboardHomeContainer.propTypes = {};

const mapStateToProps = () => ({});

const DashboardHomeContainerWithState = connect(mapStateToProps)(
  DashboardHomeContainer
);

export default DashboardHomeContainerWithState;
