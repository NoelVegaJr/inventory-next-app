import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Formik, Form } from 'formik';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import itemSchema from '../Schemas/ItemSchema';

const updateItem = async (item: any) => {
  const response = await fetch(`/api/items/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

const ItemForm = ({ id, initialValues, onSubmitForm }: any) => {
  const inputStyles =
    'w-full outline-none border border-slate-300 rounded p-2 focus:border-blue-300 ';
  const submitButtonStyles =
    'bg-green-600 hover:bg-green-700 w-full rounded-xl py-2 text-white mt-4';
  return (
    <Formik
      initialValues={{
        name: initialValues.name,
        size: initialValues.size,
        quantity: initialValues.quantity,
        location: initialValues.location,
        unitSize: initialValues.unitSize,
        unitQuantity: initialValues.unitQuantity,
      }}
      validationSchema={itemSchema}
      onSubmit={(values) => onSubmitForm(values)}
    >
      <Form className='flex flex-col gap-2'>
        <TextInput label='Name' name='name' className={inputStyles} />
        <div className='flex gap-2'>
          <div className='w-1/2'>
            <TextInput label='Size' name='size' className={`${inputStyles}`} />
          </div>
          <div className='w-1/2'>
            <SelectInput
              label='Unit'
              name='unitSize'
              className={`${inputStyles} cursor-pointer`}
            >
              <option value=''>Select</option>
              <option value='inch'>Inch</option>
              <option value='feet'>Feet</option>
              <option value='gallons'>Gallons</option>
              <option value='gauge'>Gauge</option>
            </SelectInput>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='w-1/2'>
            <TextInput
              label='Quantity'
              name='quantity'
              className={inputStyles}
            />
          </div>
          <div className='w-1/2'>
            <SelectInput
              label='Unit'
              name='unitQuantity'
              className={`${inputStyles} cursor-pointer`}
            >
              <option value=''>Select</option>
              <option value='count'>Count</option>
              <option value='feet'>Feet</option>
            </SelectInput>
          </div>
        </div>
        <TextInput label='Location' name='location' className={inputStyles} />
        <button type='submit' className={submitButtonStyles}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ItemForm;
