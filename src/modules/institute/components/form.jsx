
import React from “react”;
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
} from “antd”;

const getOptions = (edit, values) => {
 return {
   text: {
     initialValue: edit ? values.text : undefined,
     rules: [
       { required: true, message: “Please input Text for Announcement.” }
     ]
   },
   link: {
     initialValue: edit ? values.link : undefined,
     rules: [{ message: “Please input Announcement Link” }]
   }
 };
};

const hasErrors = fieldsError =>
 Object.keys(fieldsError).some(field => fieldsError[field]);

const AnnouncementFormComponent = props => {
 const textError = props.isFieldTouched(“text”) && props.getFieldError(“text”);
 const linkError = props.isFieldTouched(“link”) && props.getFieldError(“link”);

 return (
   <div>
     {props.edit ? (
       <Button.Group>
         <Button type=“primary” onClick={props.toggleModal}>
           Update Announcement
         </Button>
         <Popconfirm
           title=“Are you sure delete?”
           onConfirm={props.handleDelete}
         >
           <Button type=“danger”>Delete</Button>
         </Popconfirm>
       </Button.Group>
     ) : (
       <Button type=“primary” onClick={props.toggleModal}>
         Add New Announcement
       </Button>
     )}

     <Modal
       width={768}
       title={props.edit ? “Edit Announcement” : “Add New Announcement.“}
       okText=“Add”
       visible={props.visible}
       onOk={props.handleSubmit}
       onCancel={props.toggleModal}
       footer={[
         <Button key=“cancel” onClick={props.toggleModal}>
           Cancel
         </Button>,
         <Button
           key=“submit”
           onClick={props.handleSubmit}
           loading={props.loading}
           type=“primary”
           htmlType=“submit”
           disabled={hasErrors(props.getFieldsError())}
         >
           {props.edit ? “Update Announcement” : “Add Announcement”}
         </Button>
       ]}
     >
       <Row>
         <Col span={24}>
           <Form layout=“vertical”>
             <Row gutter={20}>
               <Col span=“24”>
                 <Form.Item
                   validateStatus={textError ? “error” : “”}
                   help={textError || “”}
                   label=“Announcement Text”
                 >
                   {props.getFieldDecorator(
                     “text”,
                     getOptions(props.edit, props.announcement).text
                   )(<Input placeholder=“Text” />)}
                 </Form.Item>
               </Col>
               <Col span=“24">
                 <Form.Item
                   validateStatus={linkError ? “error” : “”}
                   help={linkError || “”}
                   label=“Announcement Link”
                 >
                   {props.getFieldDecorator(
                     “link”,
                     getOptions(props.edit, props.announcement).link
                   )(<Input style={{ width: “100%” }} placeholder=“Link” />)}
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

export default AnnouncementFormComponent;