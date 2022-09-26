import { useState, useContext } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextInput from '../components/Form/TextInput';
import HomeNavbar from '../components/Navbar/HomeNavbar';
import PasswordInput from '../components/Form/PasswordInput';
import useSession from '../hooks/useSession';
import { useRouter } from 'next/router';

const inputStyles = 'w-full outline-none border rounded';
const submitButtonStyles = 'w-full bg-slate-900 text-white p-2 rounded mt-4';

const SignIn = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const { session, login, loadingSession } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/profile');
  }

  return (
    <div className='h-screen w-full flex flex-col '>
      <HomeNavbar />
      <div className='h-full grid place-content-center'>
        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={async (values) =>
            setIsValid(await login(values.email, values.password))
          }
        >
          <Form>
            {isValid === false && (
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
