import Link from 'next/link';

const Logo = () => {
  return (
    <div className=' relative'>
      <Link href='/'>
        <a className='text-white text-xl'>Journaled</a>
      </Link>
    </div>
  );
};

export default Logo;
