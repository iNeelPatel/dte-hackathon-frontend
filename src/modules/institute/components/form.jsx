import React from "react";
import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  Button,
  Popconfirm,
  InputNumber,
  Select
} from "antd";

const getOptions = (edit, values) => {
  return {
    text: {
      initialValue: edit ? values.text : undefined,
      rules: [{ required: true, message: "Please input Text for Institute." }]
    },
    link: {
      initialValue: edit ? values.link : undefined,
      rules: [{ message: "Please input Institute Link" }]
    }
  };
};

const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

const InstituteFormComponent = props => {
  const textError = props.isFieldTouched("text") && props.getFieldError("text");
  const linkError = props.isFieldTouched("link") && props.getFieldError("link");

  return (
    <div>
      {props.edit ? (
        <Button.Group>
          <Button type="primary" onClick={props.toggleModal}>
            Update Institute
          </Button>
          <Popconfirm
            title="Are you sure delete?"
            onConfirm={props.handleDelete}
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Button.Group>
      ) : (
        <Button type="primary" onClick={props.toggleModal}>
          Add New Institute
        </Button>
      )}

      <Modal
        width={768}
        title={props.edit ? "Edit Institute" : "Add New Institute."}
        okText="Add"
        visible={props.visible}
        onOk={props.handleSubmit}
        onCancel={props.toggleModal}
        footer={[
          <Button key="cancel" onClick={props.toggleModal}>
            Cancel
          </Button>,
          <Button
            key="submit"
            onClick={props.handleSubmit}
            loading={props.loading}
            type="primary"
            htmlType="submit"
            disabled={hasErrors(props.getFieldsError())}
          >
            {props.edit ? "Update Institute" : "Add Institute"}
          </Button>
        ]}
      >
        <Row>
          <Col span={24}>
            <Form layout="vertical">
              <Row gutter={20}>
                <Col span="24">
                  <Form.Item
                    validateStatus={textError ? "error" : ""}
                    help={textError || ""}
                    label="Institute Text"
                  >
                    {props.getFieldDecorator(
                      "text",
                      getOptions(props.edit, props.institute).text
                    )(<Input placeholder="Text" />)}
                  </Form.Item>
                </Col>
                <Col span="24">
                  <Form.Item
                    validateStatus={linkError ? "error" : ""}
                    help={linkError || ""}
                    label="Institute Link"
                  >
                    {props.getFieldDecorator(
                      "link",
                      getOptions(props.edit, props.institute).link
                    )(<Input style={{ width: "100%" }} placeholder="Link" />)}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default InstituteFormComponent;
