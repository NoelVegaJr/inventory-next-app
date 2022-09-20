import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

const updateItem = async (item: any) => {
  const response = await fetch(`/api/items/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

const deleteItem = async (id: number) => {
  const response = await fetch(`/api/items/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id }),
  });
  const data = await response.json();
  return data;
};

export const EditItemForm = ({
  item,
  closeForm,
}: {
  item: any;
  closeForm: any;
}) => {
  const [name, setName] = useState(item.name);
  const [size, setSize] = useState(item.size);
  const [quantity, setQuantity] = useState(item.quantity);
  const [location, setLocation] = useState(item.location);
  const queryClient = useQueryClient();
  const addNewItemMutation = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });
  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      id: item.id,
      name: name
        .trim()
        .split(' ')
        .map((word: any) => word[0].toUpperCase() + word.slice(1))
        .join(' '),
      size: Number(size),
      quantity: Number(quantity),
      location: location.trim(),
    };
    addNewItemMutation.mutate(formData);
    closeForm();
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteItemMutation.mutate(item.id);
    closeForm();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeForm}
        className='z-40 absolute top-0 left-0 h-full w-full bg-slate-900/50'
      ></div>
      {/* Edit item form */}
      <div className='border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white z-50 p-6 rounded-lg shadow-2xl'>
        <div className='flex justify-between'>
          <p>ID: {item.id}</p>
          <button
            onClick={closeForm}
            className='bg-red-600 w-6 h-6 text-white rounded-full'
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-4 '>
          <input type='text' value={item.id} hidden readOnly />

          <div className='flex flex-col'>
            <label>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='outline-none border border-slate-300 rounded p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label>Size: </label>
            <input
              type='text'
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className='outline-none border border-slate-300 rounded p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label>Quantity: </label>
            <input
              type='text'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className='outline-none border border-slate-300 rounded p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label>Location: </label>
            <input
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='outline-none border border-slate-300 rounded p-2'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 w-full rounded-xl py-2 text-white hover:bg-blue-700'
          >
            Edit
          </button>
        </form>
        <form onSubmit={handleDelete} className='mt-4'>
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 w-full rounded-xl py-2 text-white '
          >
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default EditItemForm;
