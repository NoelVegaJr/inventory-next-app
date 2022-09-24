import React, { useContext } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import getSession from '../utils/session';

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  return { props: {} };
};

const Profile = () => {
  return <div>profile</div>;
};

export default Profile;
