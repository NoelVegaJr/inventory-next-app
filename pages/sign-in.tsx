import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';
import TextInput from '../components/Form/TextInput';
import BasicNavbar from '../components/Navbar/BasicNavbar';
import PasswordInput from '../components/Form/PasswordInput';
import { useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/router';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../utils/db';

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
//   if (session) {
//     return {
//       redirect: {
//         destination: '/profile',
//         permanent: false,
//       },
//     };
//   }
//   return { props: {} };
// };

const SignIn = () => {
  const [failedLogin, setFailedLogin] = useState(false);
  const ctx = useContext(AuthContext);
  const router = useRouter();
  const inputStyles = 'w-full outline-none border rounded';
  const submitButtonStyles = 'w-full bg-slate-900 text-white p-2 rounded mt-4';
  const queryClient = useQueryClient();

  if (ctx.auth) {
    router.push('/profile');
    return;
  }

  const handleSubmit = async (values: any) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (response.ok) {
      queryClient.invalidateQueries(['auth']);
      router.push('/profile');
      return;
    } else {
      setFailedLogin(true);
    }
    console.log(data);
  };

  return (
    <div className='h-screen w-full flex flex-col '>
      <BasicNavbar />
      <div className='h-full grid place-content-center'>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            {failedLogin && (
              <p className='text-red-600'>Incorrect username or password</p>
            )}
            <TextInput label='Email' name='email' className={inputStyles} />
            <PasswordInput
              label='Password'
              name='password'
              className={inputStyles}
            />
            <button type='submit' className={submitButtonStyles}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
