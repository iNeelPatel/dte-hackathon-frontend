import React, { Component } from "react";
import { connect } from "dva";
import { message } from "antd";
import { routerRedux } from "dva/router";
import Parse from "parse";

import InstituteScreenComponet from "../components/screen";

class InstituteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laoding: true,
      institutes: []
    };
  }

  componentDidMount() {
    const instituteQuery = new Parse.Query("Institute");
    this.setState({ loading: true });

    instituteQuery
      .find()
      .then(institutes => {
        this.setState({
          loading: false,
          institutes: institutes.map(institute => ({
            id: institute.id,
            parseObject: institute,
            key: institute.id,
            ...institute.toJSON()
          }))
        });
      })
      .catch(error => message.error(error.message()));
  }

  render() {
    return (
      <InstituteScreenComponet
        institutes={this.state.institutes}
        loading={this.state.loading}
      />
    );
  }
}

const mapStateToProps = () => ({});

const InstituteContainerWithState = connect(mapStateToProps)(
  InstituteContainer
);

export default InstituteContainerWithState;
