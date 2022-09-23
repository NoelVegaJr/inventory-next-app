import { useField } from 'formik';

const SelectInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select id={props.id || props.name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='text-xs text-red-600'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectInput;
