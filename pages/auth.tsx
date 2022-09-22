import React from 'react';
import Logo from '../components/Logo';

const Auth = () => {
  return (
    <div className='h-screen w-full flex flex-col '>
      <nav className='bg-slate-900 h-20 flex items-center justify-between px-8 w-full'>
        <Logo />
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
      </nav>
      <div className=' h-full w-full grid place-content-center bg-slate-800'>
        <div className='border border-slate-900 rounded p-8 flex flex-col justify-center items-center gap-20 bg-white'>
          <div className='border-2 p-6 grid place-content-center rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-40 h-40 stroke-slate-900'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
              />
            </svg>
          </div>
          <form className='flex flex-col gap-6 w-80 '>
            <div>
              <input
                type='text'
                placeholder='Email'
                className='outline-none border border-slate-900 p-2 w-full rounded'
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Password'
                className='outline-none border border-slate-900 p-2 w-full rounded'
              />
            </div>
            <button className='bg-slate-900 text-slate-100 py-2 rounded'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
