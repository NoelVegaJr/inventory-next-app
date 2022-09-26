import React from 'react';
import { useState, useContext } from 'react';
import { SessionContext } from '../../context/session-context';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

const inputStyles = 'w-full outline-none border rounded';
const submitButtonStyles = 'w-full bg-slate-900 text-white p-2 rounded mt-4';

const SignInForm = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const ctxSession = useContext(SessionContext);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={async (values) =>
        setIsValid(await ctxSession.login(values.email, values.password))
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
  );
};

export default SignInForm;
