import React from 'react';
import HomeNavbar from './Navbar/HomeNavbar';
const Layout = ({ session, loadingSession, children }: any) => {
  return (
    <div className='h-screen w-full flex flex-col '>
      <HomeNavbar session={session} loading={loadingSession} />
      {loadingSession && (
        <div className='h-full grid place-content-center'>
          <p>Loading</p>
        </div>
      )}
      {!loadingSession && (
        <div className=' h-full w-full flex bg-slate-900'>{children}</div>
      )}
    </div>
  );
};

export default Layout;
