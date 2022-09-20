import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='w-12 h-12 relative'>
      <Image
        className=''
        src='/DaidoneElectric.png'
        alt='Your Company'
        layout='fill'
        quality={100}
      />
    </div>
  );
};

const Header = () => {
  return (
    <div className='flex h-16 flex-shrink-0 items-center bg-gray-900 px-4 '>
      <Logo />
    </div>
  );
};
const Sidebar = () => {
  return (
    <div className='hidden md:block h-full md:w-64 md:flex-col bg-indigo-700'>
      <div className='flex min-h-0 flex-1 flex-col bg-gray-800'>
        {/* <Header /> */}
      </div>
    </div>
  );
};

export default Sidebar;
