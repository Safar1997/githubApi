import React from 'react';
import { Menu } from 'antd';

const Navigation = (props) => {  
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px', display: 'flex' }}
    >
      <Menu.Item key="/home">
        <span>Top most liked repos in GitHub</span>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;