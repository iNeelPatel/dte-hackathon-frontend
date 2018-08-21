import React from "react";
import { Menu } from "antd";
import "./header.css";
import "antd/dist/antd.css";
import MenuItem from "antd/lib/menu/MenuItem";

const HeaderNav = props => {
  console.log(props);
  return (
    <Menu
      onClick={props.handleNavigate}
      mode="horizontal"
      selectedKeys={[props.selectedRoute]}
    >
      <MenuItem>
        <img src="/assets/dte.png" alt="DTE Logo" className="dte-logo-nav" />
      </MenuItem>
      <Menu.Item key="/user/dashboard">Dashboard</Menu.Item>
      <Menu.Item key="/user/inwardOutwardRegister">
        Inward/Outward Register
      </Menu.Item>
      <Menu.Item key="/user/institute">Institute</Menu.Item>
    </Menu>
  );
};

export default HeaderNav;
