import Content from './Content';

import HomeNavbar from './Navbar/HomeNavbar';

const Layout = ({ children }: any) => {
  return (
    <div className='h-screen w-full flex flex-col '>
      <HomeNavbar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
