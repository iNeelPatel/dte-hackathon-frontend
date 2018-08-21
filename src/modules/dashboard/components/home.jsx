import React from "react";
import { Breadcrumb, Icon, Button } from "antd";
import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const OrderFactoryComponent = props => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item href="/user/dashboard">
        <Icon type="home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon type="user" />
        <span>Dashboard</span>
        <br />
        <Button onClick={props.handleLogout} type="danger">
          Logout
        </Button>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default OrderFactoryComponent;
