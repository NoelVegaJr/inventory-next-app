import Logo from '../Logo';
import Link from 'next/link';

const HomeNavbar = () => {
  return (
    <nav className='h-20 flex items-center justify-between px-8 py-12 w-full  bg-slate-900 '>
      <Logo />
      <div className='flex items-center gap-4'>
        <Link href='/sign-in'>
          <a className='text-white hover:text-white/80 text-lg'>Sign in</a>
        </Link>
        <Link href='sign-up'>
          <a className='text-white text-lg p-1.5  border border-white rounded-lg hover:text-white/80 hover:border-white/80'>
            Sign up
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavbar;
