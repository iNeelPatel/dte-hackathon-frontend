import React, { Component } from "react";
import { connect } from "dva";

import InstituteComponet from "../components/screen";

class InstituteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log("here");
    return <InstituteComponet />;
  }
}

const mapStateToProps = () => ({});

const InstituteContainerWithState = connect(mapStateToProps)(
  InstituteContainer
);

export default InstituteContainerWithState;
