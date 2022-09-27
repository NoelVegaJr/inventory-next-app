import { useState, useContext } from 'react';
import { SessionContext } from '../../context/session-context';
import Logo from '../Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignInSignup = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/sign-in' && (
        <Link href='/sign-in'>
          <a className='text-white hover:text-white/80 text-lg'>Sign in</a>
        </Link>
      )}
      {router.pathname !== '/sign-up' && (
        <Link href='sign-up'>
          <a className='text-white text-lg p-1.5  border border-white rounded-lg hover:text-white/80 hover:border-white/80'>
            Sign up
          </a>
        </Link>
      )}
    </>
  );
};

const HomeNavbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const ctxSession = useContext(SessionContext);

  return (
    <nav className='h-20 flex items-center justify-between px-8 py-12 w-full  bg-slate-900 '>
      <Logo />
      {!ctxSession.loading && (
        <div className='flex items-center gap-4'>
          {!ctxSession.session && <SignInSignup />}
          {ctxSession.session && (
            <div className='relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                className='w-8 h-8 stroke-white cursor-pointer'
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              {profileOpen && (
                <ul className='absolute w-32 -left-24 top-8 bg-slate-800 border rounded overflow-hidden text-xs text-white cursor-pointer drop-shadow-2xl '>
                  <li className=' hover:bg-sky-500'>
                    <Link href='/profile'>
                      <a className='h-full w-full px-6 py-2 block'>
                        Your profile
                      </a>
                    </Link>
                  </li>
                  <li className=' hover:bg-sky-500'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        ctxSession.logout();
                      }}
                      className='h-full w-full'
                    >
                      <button className=' px-6 py-2  h-full w-full text-left  hover:text-white/80 hover:border-white/80'>
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
