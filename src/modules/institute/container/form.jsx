import React, { Component } from "react";
import { message, Form } from "antd";
import PropTypes from "prop-types";
import Parse from "parse";

import InstituteComponet from "../components/form";

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
    query.set("text", values.text);
    // check link here or throw error using message
    if (this.ValidURL(values.link)) {
      query.set("link", values.link);
    } else {
      message.error("link must be valid URL");
      return;
    }
    query.set("user", Parse.User.current());
    if (!this.props.edit) {
      query.set("active", false);
    }

    query
      .save()
      .then(announcement => {
        this.setState({ loading: false, visible: false });
        this.props.form.resetFields();
        if (this.props.edit) {
          this.props.handleChange.handleUpdate(announcement);
        } else {
          this.props.handleChange.handleNew(announcement);
        }
      })
      .catch(error => message.error(error.message));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.edit) {
          this.saveObject(this.props.announcement.parseObject, values);
        } else {
          const AnnouncementClass = new Parse.Object.extend("Announcement");
          const AnnouncementObject = new AnnouncementClass();
          this.saveObject(AnnouncementObject, values);
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
    this.props.handleChange.handleDelete(this.props.announcement);
  }

  render() {
    return (
      <InstituteComponet
        getFieldsError={this.props.form.getFieldsError}
        isFieldTouched={this.props.form.isFieldTouched}
        getFieldError={this.props.form.getFieldError}
        getFieldDecorator={this.props.form.getFieldDecorator}
        handleSubmit={this.handleSubmit}
        visible={this.state.visible}
        loading={this.state.loading}
        handleDelete={this.handleDelete.bind(this)}
        announcement={this.props.announcement}
        edit={this.props.edit}
        toggleModal={this.toggleModal}
      />
    );
  }
}

const InstituteFormContainerWithForm = Form.create()(InstituteFormContainer);

export default InstituteFormContainerWithForm;
