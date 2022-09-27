import * as Yup from 'yup';

const itemSchema = Yup.object({
  name: Yup.string()
    .max(32, 'Cannot be greater than 32 characters')
    .required('Required'),
  size: Yup.number().required('Required'),
  quantity: Yup.number().required('Required'),
  location: Yup.string()
    .max(32, 'Cannot be greater than 32 characters')
    .required('Required'),
  unitSize: Yup.string()
    .oneOf(['inch', 'feet', 'gallons', 'gauge'], 'Choose a valid unit')
    .required('Required'),
  unitQuantity: Yup.string()
    .oneOf(['count', 'feet'], 'Choose a valid unit')
    .required('Required'),
});

export default itemSchema;
