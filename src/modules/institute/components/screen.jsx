import React from "react";
import { Layout, Icon, Row, Col, Table, Input } from "antd";
import "antd/dist/antd.css";
import PageHeader from "ant-design-pro/lib/PageHeader";
import "ant-design-pro/dist/ant-design-pro.css";
// import "./screen.css";

import InstituteFormContainer from "../container/form";

const getColumns = (handleUpdate, handleDelete) => [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    sorter: (a, b) => parseInt(a.code) - parseInt(b.code)
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    filters: [{ text: "SFI", value: "SFI" }, { text: "GOVT", value: "GOVT" }],

    onFilter: (value, record) => record.type.includes(value)
  },

  {
    title: "Edit",
    key: "edit",
    render: (edit, institute) => (
      <InstituteFormContainer
        handleChange={{ handleUpdate, handleDelete }}
        edit={true}
        institute={institute}
      />
    )
  }
];

const InstituteComponent = props => {
  return (
    <Layout className="mr-15">
      <PageHeader
        title="Institute"
        logo={<Icon type="solution" style={{ fontSize: "21px" }} />}
        action={
          <div>
            <InstituteFormContainer
              handleChange={{ handleNew: props.handleNew }}
              edit={false}
            />
          </div>
        }
      />

      <Layout.Content style={{ marginTop: 20 }}>
        <Row>
          <Col span="24">
            <Input.Search
              size="large"
              placeholder="Search Institutes"
              onChange={e => props.searchInstitutes(e.target.value)}
              style={{ width: "100%", marginBottom: 20 }}
            />
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <Table
              dataSource={props.institutes}
              bordered
              loading={props.loading}
              columns={getColumns(props.handleUpdate, props.handleDelete)}
              key={props.institutes.key}
            />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default InstituteComponent;
