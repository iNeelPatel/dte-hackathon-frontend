import React from "react";
import { Layout, Icon } from "antd";
import "antd/dist/antd.css";
import PageHeader from "ant-design-pro/lib/PageHeader";
import "ant-design-pro/dist/ant-design-pro.css";
import "./screen.css";
import InstituteFormContainerWithForm from "../container/form";

const InstituteComponent = props => {
  console.log(props);
  return (
    <Layout className="mr-15">
      <PageHeader
        title="Institute"
        logo={<Icon type="home" style={{ fontSize: "21px" }} />}
        action={
          <div>
            <InstituteFormContainerWithForm />
          </div>
        }
      />
    </Layout>
  );
};

export default InstituteComponent;
