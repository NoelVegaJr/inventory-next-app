import HomeNavbar from '../components/Navbar/HomeNavbar';
import Image from 'next/image';
import Link from 'next/link';
import useSession from '../hooks/useSession';
import Layout from '../components/layout';
export default function Home() {
  const { session, loadingSession } = useSession();

  return (
    <Layout session={session} loadingSession={loadingSession}>
      <main className='h-full w-full flex'>
        <section className='w-1/2 h-full grid place-content-center transform p-10'>
          <div>
            <h1 className='text-7xl font-bold mb-4 drop-shadow-2xl text-white tracking-wide'>
              Let&apos;s empower your team today.
            </h1>
            <p className='text-2xl mb-4 text-slate-300'>
              A platform for teams to collaborate, organize data and manage
              projects.
            </p>
            <div className='flex gap-4'>
              <form className='flex gap-2 w-full'>
                <input
                  type='text'
                  placeholder='Email address'
                  className='rounded p-4 h-full outline-none grow'
                />
                <button className='text-white font-semibold bg-green-600 p-1 px-4 rounded h-full'>
                  Sign up for Journaled
                </button>
                <Link href='/inventory'>
                  <a className=' bg-orange-600 font-semibold text-white p-1 px-4 rounded h-full flex items-center'>
                    Demo
                  </a>
                </Link>
              </form>
            </div>

            <p className='text-xs text-gray-500 mt-2'>
              NO CREDIT CARD REQUIRED
            </p>
          </div>
        </section>

        <section className='w-1/2 flex items-center justify-center '>
          <div className='w-1/2 h-1/2 relative'>
            <Image
              src='/man-making-list-of-planning.gif'
              alt='gif'
              objectFit='cover'
              layout='fill'
              quality={100}
              priority
              className='w-full'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
