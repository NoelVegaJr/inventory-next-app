import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }: { children: any }) => {
  const [activeNamespace, setActiveNamespace] = useState();
  const [activeSidebar, setActiveSidebar] = useState(false);
  const handleToggleSidebar = () => {
    console.log('show sidebar');
    setActiveSidebar(!activeSidebar);
  };

  const handleNamespaceChange = (id: any) => {
    setActiveNamespace(id);
  };

  return (
    <div className='h-screen  flex flex-col '>
      <Navbar showSidebar={handleToggleSidebar} />
      <div className='flex grow overflow-hidden'>
        <Sidebar
          show={activeSidebar}
          toggle={handleToggleSidebar}
          setActiveNamespace={handleNamespaceChange}
        />
        <div className='w-full flex flex-col gap-2 p-2 relative'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
