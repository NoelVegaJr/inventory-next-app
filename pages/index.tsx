import Logo from '../components/Logo';
import Link from 'next/link';
export default function Home() {
  return (
    <div className='h-screen w-full flex flex-col '>
      <nav className='bg-slate-900 h-20 flex items-center justify-between px-8'>
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
      <div className=' h-full w-full flex bg-gray-100'>
        <div className='w-1/2 h-full grid place-content-center transform'>
          <div className=''>
            <h1 className='text-5xl font-bold mb-4 drop-shadow-2xl'>
              Welcome to Journaled
            </h1>
            <p className='text-xl mb-4'>
              A platform for teams to collaborate, organize data and manage
              projects.
            </p>
            <div className='flex gap-6'>
              <Link href='/auth'>
                <a className=' bg-slate-900 font-semibold text-white px-12 py-4 rounded mb-2'>
                  Sign up is free
                </a>
              </Link>
              <Link href='/inventory'>
                <a className=' bg-orange-600 font-semibold text-white px-12 py-4 rounded mb-2'>
                  Demo
                </a>
              </Link>
            </div>

            <p className='text-xs text-gray-500'>NO CREDIT CARD REQUIRED</p>
          </div>
        </div>

        <div className='w-1/2'></div>
      </div>
    </div>
  );
}
