import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import PropTypes from "prop-types";
import Parse from "parse";
import { message } from "antd";

import UserLayoutComponent from "./component";

class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.currentUser = Parse.User.current();
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    Parse.User.logOut();
    this.props.dispatch(routerRedux.push({ pathname: "/" }));
  }

  render() {
    if (this.props.roles.length > 0) {
      return (
        <UserLayoutComponent
          logout={this.logout}
          match={this.props.match.path}
          username={this.currentUser ? this.currentUser.get("username") : ""}
        />
      );
    }

    return null;
  }
}

UserLayout.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  roles: state.user.roles
});

const UserLayoutWithState = connect(mapStateToProps)(UserLayout);

export default UserLayoutWithState;
