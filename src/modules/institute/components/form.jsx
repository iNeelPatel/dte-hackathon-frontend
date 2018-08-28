import React from "react";
import { Modal, Form, Row, Col, Input, Button, Popconfirm, Select } from "antd";

const Option = Select.Option;

const getOptions = (edit, values) => {
  return {
    code: {
      initialValue: edit ? values.code : undefined,
      rules: [{ required: true, message: "Please input code of Institute." }]
    },
    name: {
      initialValue: edit ? values.name : undefined,
      rules: [{ required: true, message: "Please input name of Institute." }]
    },
    type: {
      initialValue: edit ? values.type : undefined,
      rules: [{ required: true, message: "Please input type of Institute." }]
    },
    city: {
      initialValue: edit ? values.city : undefined,
      rules: [{ required: true, message: "Please input city of Institute." }]
    },
    zone: {
      initialValue: edit ? values.zone : undefined,
      rules: [{ message: "Please input zone of Institute." }]
    }
  };
};

const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

const InstituteFormComponent = props => {
  console.log(props);
  const codeError = props.isFieldTouched("text") && props.getFieldError("text");
  const nameError = props.isFieldTouched("name") && props.getFieldError("name");
  const typeError = props.isFieldTouched("type") && props.getFieldError("type");
  const cityError = props.isFieldTouched("city") && props.getFieldError("city");
  const zoneError = props.isFieldTouched("zone") && props.getFieldError("zone");

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
                <Col span="4">
                  <Form.Item
                    validateStatus={codeError ? "error" : ""}
                    help={codeError || ""}
                    label="Institute Code"
                  >
                    {props.getFieldDecorator(
                      "code",
                      getOptions(props.edit, props.institute).code
                    )(<Input placeholder="Code" />)}
                  </Form.Item>
                </Col>

                <Col span="16">
                  <Form.Item
                    validateStatus={nameError ? "error" : ""}
                    help={nameError || ""}
                    label="Institute Name"
                  >
                    {props.getFieldDecorator(
                      "name",
                      getOptions(props.edit, props.institute).name
                    )(<Input placeholder="Name" />)}
                  </Form.Item>
                </Col>

                <Col span="4">
                  <Form.Item
                    validateStatus={typeError ? "error" : ""}
                    help={typeError || ""}
                    label="Institute Type"
                  >
                    {props.getFieldDecorator(
                      "type",
                      getOptions(props.edit, props.institute).type
                    )(
                      <Select placeholder="Select">
                        <Option value="SFI">SFI</Option>
                        <Option value="GOVT">GOVT</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>

                <Col span="12">
                  <Form.Item
                    validateStatus={cityError ? "error" : ""}
                    help={cityError || ""}
                    label="Institute City"
                  >
                    {props.getFieldDecorator(
                      "city",
                      getOptions(props.edit, props.institute).city
                    )(<Input placeholder="City" />)}
                  </Form.Item>
                </Col>

                <Col span="12">
                  <Form.Item
                    validateStatus={zoneError ? "error" : ""}
                    help={zoneError || ""}
                    label="Institute Zone"
                  >
                    {props.getFieldDecorator(
                      "zone",
                      getOptions(props.edit, props.institute).zone
                    )(<Input placeholder="Zone" />)}
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
