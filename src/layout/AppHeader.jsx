import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => (
  <Header className="header">
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/posts-app/">Users</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default AppHeader;