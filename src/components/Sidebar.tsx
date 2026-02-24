import  { useState } from 'react';
import {
 
  ApartmentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Path } from '../paths';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon:<ApartmentOutlined  className='text-xl!'/>, label: <Link to={Path.stacks}>Stacks</Link> },
  { key: '2', icon: <UsergroupAddOutlined  className='text-xl!'/>,label: <Link to={Path.groups}>Groups</Link> },
  { key: '3', icon: <UserOutlined  className='text-xl!'/>, label: <Link to={Path.teachers}>Teachers</Link> },
  { key: '4', icon:<SolutionOutlined className='text-xl!' />, label: <Link to={Path.students}>Students</Link> },
  { key: '5', icon:<ShopOutlined className='text-xl!'/>, label: <Link to={Path.rooms}>Rooms</Link> },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };



  return (
    <div className={`${collapsed ? "w-[5%]" : "w-[14%]"} duration-300  items-center h-screen flex flex-col gap-6  bg-[#0B0B0B] border-[#151B23] border-r`}>
    <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}  w-full px-4 py-6 border-[#151B23] border-b`}>
    {!collapsed &&  <h2 className='text-white text-xl '>Dashboard</h2>}
      <Button type="primary" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
      <Menu
       className='text-lg! space-y-4! h-full bg-transparent! px-2!'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Sidebar;