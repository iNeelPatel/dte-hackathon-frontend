import React, { Component } from "react";
import { connect } from "dva";
import PropTypes from "prop-types";

import LayoutComponent from "../components/layout";

class Layout extends Component {
  componentWillMount() {
    document.title = "Dashboard";
  }

  render() {
    return <LayoutComponent match={this.props.match.path} />;
  }
}

Layout.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired
};

const mapStateToProps = state => ({
  roles: state.user.roles
});

const LayoutWithState = connect(mapStateToProps)(Layout);

export default LayoutWithState;
