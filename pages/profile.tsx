import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSession from '../hooks/useSession';
import HomeNavbar from '../components/Navbar/HomeNavbar';
import Layout from '../components/layout';

const Profile = () => {
  // const { session, loadingSession } = useSession();
  const router = useRouter();

  // if (!loadingSession && !session) {
  //   router.push('/sign-in');
  // }

  return (
    <main className='h-full w-full bg-slate-200'>
      {/* {loadingSession ? (
          <div className='h-full grid place-content-center'>
            <p>loading</p>
          </div>
        ) : ( */}
      <div className='h-full grid place-content-center'>
        <div>Profile</div>
      </div>
      {/* )} */}
    </main>
  );
};

export default Profile;
