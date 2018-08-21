import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Breadcrumb, Icon } from "antd";
import "./dashboard.css";
import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class OrderFactoryComponent extends React.Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item>
          <img src="/assets/dte.png" alt="logo" className="navLogo" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default OrderFactoryComponent;
