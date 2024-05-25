import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Spin size="large" />
  </div>
);

export default LoadingSpinner;