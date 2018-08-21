import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Breadcrumb, Icon, Button } from "antd";
import HeaderNav from "../../header/components/header";
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
