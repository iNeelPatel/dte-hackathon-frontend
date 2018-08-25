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
      laoding: false,
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
  handleNew(institute) {
    this.setState({
      institutes: [
        ...this.state.institutes,
        {
          id: institute.id,
          key: institute.id,
          parseObject: institute,
          ...institute.toJSON()
        }
      ].reverse()
    });
  }

  handleUpdate(institute) {
    const updatedInstitute = this.state.institutes.map(instituteS => {
      if (instituteS.id === institute.id) {
        return {
          id: institute.id,
          key: institute.id,
          parseObject: institute,
          ...institute.toJSON(),
          edit: instituteS.edit
        };
      } else {
        return instituteS;
      }
    });

    this.setState({ institutes: updatedInstitute });
  }

  handleDelete(institute) {
    institute.parseObject
      .destroy()
      .then(institute => {
        const updatedInstitute = this.state.institutes.filter(instituteS => {
          return instituteS.id !== institute.id;
        });
        this.setState({ institutes: updatedInstitute });
      })
      .catch(error => message.error(error.message));
  }

  render() {
    return (
      <InstituteScreenComponet
        institutes={this.state.institutes}
        loading={this.state.loading}
        handleNew={this.handleNew.bind(this)}
        handleUpdate={this.handleUpdate.bind(this)}
        handleDelete={this.handleDelete.bind(this)}
      />
    );
  }
}

const mapStateToProps = () => ({});

const InstituteContainerWithState = connect(mapStateToProps)(
  InstituteContainer
);

export default InstituteContainerWithState;
