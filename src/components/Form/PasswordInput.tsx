import React from 'react';
import { useField } from 'formik';

const PasswordInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input
          type='password'
          id={props.id || props.name}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className='text-sm text-red-600'>{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default PasswordInput;
