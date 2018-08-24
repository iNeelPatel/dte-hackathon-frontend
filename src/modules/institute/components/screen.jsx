import React from "react";
import { Layout, Icon, Row, Col, Table } from "antd";
import "antd/dist/antd.css";
import PageHeader from "ant-design-pro/lib/PageHeader";
import "ant-design-pro/dist/ant-design-pro.css";
import "./screen.css";

import InstituteFormContainer from "../container/form";

const getColumns = () => [
  {
    title: "Code",
    dataIndex: "code",
    key: "code"
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type"
  }

  // {
  //   title: "Edit",
  //   key: "edit",
  //   render: (edit, institute) => (
  //     <InstituteFormContainer
  //       handleChange={{ handleUpdate, handleDelete }}
  //       edit={true}
  //       institute={institute}
  //     />
  //   )
  // }
];

const InstituteComponent = props => {
  console.log(props);
  return (
    <Layout className="mr-15">
      <PageHeader
        title="Institute"
        logo={<Icon type="home" style={{ fontSize: "21px" }} />}
        action={
          <div>
            <InstituteFormContainer />
          </div>
        }
      />
      <Layout.Content style={{ marginTop: 20 }}>
        <Row>
          <Col span="24">
            <Table
              dataSource={props.institutes}
              bordered
              loading={props.loading}
              // columns={getColumns(props.handleUpdate, props.handleDelete)}
              // key={props.institute.key}
            />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default InstituteComponent;
