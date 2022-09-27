import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import HomeNavbar from '../components/Navbar/HomeNavbar';
import TextInput from '../components/Form/TextInput';
import BasicNavbar from '../components/Navbar/BasicNavbar';
import PasswordInput from '../components/Form/PasswordInput';
import Layout from '../components/layout';

const Register = () => {
  const inputStyles = 'w-full outline-none border rounded';
  const submitButtonStyles = 'w-full bg-slate-900 text-white p-2 rounded mt-4';

  const handleSubmit = async (values: any) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await response.json();
  };

  return (
    <div className='h-full w-full bg-slate-50 grid place-content-center'>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirmation: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string()
            .min(6, 'Password must be atleast 6 characters long')
            .max(20, 'Password cannot be greater then 20 characters long')
            .required('Required'),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Password does not match'
          ),
        })}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <TextInput label='Email' name='email' className={inputStyles} />
          <PasswordInput
            label='Password'
            name='password'
            className={inputStyles}
          />
          <PasswordInput
            label='Confirm Password'
            name='passwordConfirmation'
            className={inputStyles}
          />

          <button type='submit' className={submitButtonStyles}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
