import React from "react";
import { Menu, Button , Icon } from "antd";
import "./header.css";
import "antd/dist/antd.css";
import MenuItem from "antd/lib/menu/MenuItem";
import SubMenu from "antd/lib/menu/SubMenu";

const HeaderNav = props => {
  console.log(props);
  return (
    <Menu
      onClick={props.handleNavigate}
      mode="horizontal"
      selectedKeys={[props.selectedRoute]}
    >
      <Menu.Item>
        <img src="/assets/dte.png" alt="DTE Logo" className="dte-logo-nav" />
      </Menu.Item>
      <Menu.Item key="/user/dashboard">Dashboard</Menu.Item>
      <Menu.Item key="/user/inwardOutwardRegister">
        Inward/Outward Register
      </Menu.Item>
      <Menu.Item key="/user/institute">Institute</Menu.Item>
      <SubMenu title="Settings" className="dte-logout-right">
        <Menu.Item key="logout">  
          <span onClick={props.handleLogout} type="danger">
          <Icon type="poweroff"/>
            Logout
          </span>
        </Menu.Item>
      </SubMenu>
      
      
    </Menu>
  );
};

export default HeaderNav;
