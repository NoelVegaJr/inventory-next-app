import { useContext } from 'react';
import { SessionContext } from '../context/session-context';

// const AvailableWorkspaces = () => {

//   return (

//   )
// }

const Profile = () => {
  const ctxSession = useContext(SessionContext);

  console.log(ctxSession);
  return (
    <main className='h-full w-full bg-slate-200'>
      <div className='h-full grid place-content-center'>
        <div>Profile: {ctxSession.session.userId}</div>
      </div>
    </main>
  );
};

export default Profile;
