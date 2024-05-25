import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from '../layout/AppHeader';
import AppFooter from "../layout/AppFooter";
import '../styles/base.css';

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content className="content">
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;