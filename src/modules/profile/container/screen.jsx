import React, { Component } from "react";
import { connect } from "dva";
import { message } from "antd";
import { routerRedux } from "dva/router";
import Parse from "parse";

import ProfileScreenComponent from "../components/screen";

class ProfileContainer extends Component {
    render(){
        return(
            <ProfileScreenComponent />
        )
    }
}

const mapStateToProps = () => ({});

const ProfileContainerWithState = connect(mapStateToProps)(
  ProfileContainer
);

export default ProfileContainerWithState;