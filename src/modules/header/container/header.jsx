import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import Parse from "parse";
import { message } from "antd";

import * as commonUtils from "../../../utils";
import HeaderNav from "../components/header";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.routes = ["inwardoutward", "institute"];
    const route = commonUtils.findRoute(this.routes, this.props.match);
    this.state = {
      route
    };
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match !== prevProps.match) {
      this.changeRoute(this.props.match);
    }
  }

  changeRoute(match) {
    const route = commonUtils.findRoute(this.routes, match);
    this.setState({ route });
  }

  handleNavigate({ key }) {
    if (key === "logout") {
      Parse.User.logOut()
        .then(() => {
          this.props.dispatch(routerRedux.push({ pathname: "/" }));
        })
        .catch(error => message.error(error.message));
    } else {
      this.props.dispatch(routerRedux.push({ pathname: key }));
      this.setState({ route: key });
    }
  }

  render() {
    return (
      <HeaderNav
        handleNavigate={this.handleNavigate}
        selectedRoute={this.state.route}
      />
    );
  }
}

const mapStateToProps = state => ({
  match: state.routing.location.pathname
});

const HeaderContainerWithState = connect(mapStateToProps)(HeaderContainer);

export default HeaderContainerWithState;
