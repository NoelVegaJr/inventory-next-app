import React, { useContext } from 'react';
import { SessionContext } from '../context/session-context';

const Content = ({ children }: any) => {
  const ctxSession = useContext(SessionContext);
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
