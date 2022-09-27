import { useState } from 'react';
import Logo from '../Logo';
const BasicNavbar = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  return (
    <nav className='bg-slate-900 h-20 flex items-center justify-between px-8 w-full '>
      <Logo />
      <div
        className='hover:cursor-pointer relative'
        onClick={() => setUserDropdown(!userDropdown)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='hidden md:block w-8 h-8 text-slate-200 '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        {userDropdown && (
          <ul className='fixed right-5 bg-slate-900 border border-slate-200 rounded-lg text-white w-52'>
            <li className='px-6 py-2'>Login</li>
            <li className='px-6 py-2'>Register</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default BasicNavbar;
