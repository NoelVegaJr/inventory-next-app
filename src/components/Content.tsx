import React, { useContext } from 'react';
import { SessionContext } from '../context/session-context';
import { useRouter } from 'next/router';

const Content = ({ children }: any) => {
  const ctxSession = useContext(SessionContext);
  const router = useRouter();

  if (!ctxSession.loading) {
    if (!ctxSession.session) {
      if (['/profile'].includes(router.pathname)) {
        router.push('/sign-in');
        return (
          <div className='h-full grid place-content-center'>
            <p>Loading</p>
          </div>
        );
      }
    } else {
      if (['/sign-up', '/sign-in'].includes(router.pathname)) {
        router.push('/profile');
      }
    }
  }

  return (
    <>
      {ctxSession.loading ? (
        <div className='h-full grid place-content-center'>
          <p>Loading</p>
        </div>
      ) : (
        <main className=' h-full w-full bg-slate-900'>{children}</main>
      )}
    </>
  );
};

export default Content;
