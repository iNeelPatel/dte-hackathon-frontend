import React from "react";
import { Icon, Layout } from "antd";
import PageHeader from "ant-design-pro/lib/PageHeader";
import "ant-design-pro/dist/ant-design-pro.css";
import "antd/dist/antd.css";

const OrderFactoryComponent = props => (
  <div>
    <Layout className="mr-15">
      <PageHeader
        title="Dashboard"
        logo={<Icon type="dashboard" style={{ fontSize: "21px" }} />}
      />
    </Layout>
  </div>
);

export default OrderFactoryComponent;
