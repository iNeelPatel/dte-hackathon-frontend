import React from "react";
import { Menu } from "antd";
import "./header.css";
import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HeaderNav = () => {
  return (
    <Menu onClick={this.handleClick} mode="horizontal">
      <img src="/assets/dte.png" alt="DTE Logo" className="dte-logo-nav" />
      <div className="nav">navBar</div>
    </Menu>
  );
};

export default HeaderNav;
