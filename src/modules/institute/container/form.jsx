import React, { Component } from "react";
import { message, Form } from "antd";
import Parse from "parse";

import InstituteFormComponent from "../components/form";

class InstituteFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      loading: false,
      visible: false
    };
  }

  saveObject(query, values) {
    query.set("code", values.code);
    query.set("name", values.name);
    query.set("type", values.type);
    query.set("city", values.city);
    query.set("zone", values.zone);

    query.set("user", Parse.User.current());
    if (!this.props.edit) {
      query.set("active", false);
    }

    query
      .save()
      .then(institute => {
        this.setState({ loading: false, visible: false });
        this.props.form.resetFields();
        if (this.props.edit) {
          this.props.handleChange.handleUpdate(institute);
          message.success("Institute Updated Successfuly");
        } else {
          this.props.handleChange.handleNew(institute);
          message.success("Institute Added Successfuly");
        }
      })
      .catch(error => message.error(error.message));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.edit) {
          this.saveObject(this.props.institute.parseObject, values);
        } else {
          const InstituteClass = new Parse.Object.extend("Institute");
          const InstituteObject = new InstituteClass();
          this.saveObject(InstituteObject, values);
        }
      }
    });
  }

  toggleModal() {
    this.setState({ visible: !this.state.visible }, () => {
      this.props.form.resetFields();
      if (this.state.visible) {
        this.props.form.validateFields();
      }
    });
  }

  handleDelete() {
    this.props.handleChange.handleDelete(this.props.institute);
    message.success("Institute Removed Successfully");
  }

  render() {
    return (
      <InstituteFormComponent
        getFieldsError={this.props.form.getFieldsError}
        isFieldTouched={this.props.form.isFieldTouched}
        getFieldError={this.props.form.getFieldError}
        getFieldDecorator={this.props.form.getFieldDecorator}
        handleSubmit={this.handleSubmit}
        visible={this.state.visible}
        loading={this.state.loading}
        handleDelete={this.handleDelete.bind(this)}
        institute={this.props.institute}
        edit={this.props.edit}
        toggleModal={this.toggleModal}
      />
    );
  }
}

const InstituteFormContainerWithForm = Form.create()(InstituteFormContainer);

export default InstituteFormContainerWithForm;
