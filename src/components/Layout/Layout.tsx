import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Burger from '../Burger/Burger';

const Layout = () => {
  return (
    <>
      <Burger />
      <NavBar />
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
