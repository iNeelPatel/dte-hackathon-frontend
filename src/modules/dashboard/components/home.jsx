import React from "react";
import { Breadcrumb, Icon, Button } from "antd";
import "antd/dist/antd.css";

class OrderFactoryComponent extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/user/dashboard">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="user" />
            <span>Dashboard</span>
            <br />
            <Button type="danger">Logout</Button>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default OrderFactoryComponent;
