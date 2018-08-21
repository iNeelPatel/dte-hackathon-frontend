import React from "react";
import { Layout, Row, Col } from "antd";
import HeaderNav from "../../header/components/header";
import RouterConfig from "../router";

const LayoutComponent = props => (
  <Layout>
    <Layout.Content>
      <Row>
        <Col span={24}>
          <HeaderNav />
          <RouterConfig />
        </Col>
      </Row>
    </Layout.Content>
  </Layout>
);

export default LayoutComponent;
