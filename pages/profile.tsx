import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
import prisma from '../utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

// const validateSession = async (cookies: any) => {
//   if (cookies.session === undefined) {
//     return false;
//   }
//   const session = await prisma.session.findFirst({
//     where: {
//       id: cookies.session,
//       maxAge: {
//         gte: new Date(),
//       },
//     },
//   });

//   if (session) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const getServerSideProps = async ({
//   req,
//   res,
// }: {
//   req: NextApiRequest;
//   res: NextApiResponse;
// }) => {
//   const session = await validateSession(req.cookies);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/sign-in',
//         permanent: false,
//       },
//     };
//   }
//   return { props: {} };
// };

const Profile = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  if (!ctx.auth) {
    router.push('sign-in');
    return;
  }
  return <div>profile</div>;
};

export default Profile;
