import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='w-12 h-12 relative'>
      {/* <Image
        className=''
        src='/DaidoneElectric.png'
        alt='Your Company'
        layout='fill'
        quality={100}
      /> */}
      <Link href='/'>
        <a className='text-white'>Inventory Control</a>
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className='bg-slate-900 h-20 w-full flex justify-between items-center px-6 shrink-0'>
      <Logo />
      <div>
        <HamburgerMenu />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='hidden md:block w-8 h-8 text-slate-200'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
