import React from 'react';

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';
import { Button, Typography, Menu, Avatar } from 'antd';
import { HolderOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>FinChart</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HolderOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to='/stocks'>Stocks</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchange</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;
