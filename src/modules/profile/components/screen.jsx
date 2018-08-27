import React from "react";
import { Layout, Icon, Row, Col, Table, Input } from "antd";
import "antd/dist/antd.css";
import PageHeader from "ant-design-pro/lib/PageHeader";
import "ant-design-pro/dist/ant-design-pro.css";

const ProfileScreenComponent = props => (
    <div>
    <Layout className="mr-15">
      <PageHeader
        title="Profile"
        logo={<Icon type="profile" style={{ fontSize: "21px" }} />}
      />
    </Layout>
  </div>
);

export default ProfileScreenComponent;
