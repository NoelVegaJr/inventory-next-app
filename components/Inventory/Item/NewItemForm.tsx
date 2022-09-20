import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

const addNewItem = async (item: any) => {
  const response = await fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
};

const NewItemForm = ({
  className,
  onClose,
}: {
  className: string;
  onClose: any;
}) => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const queryClient = useQueryClient();
  const addNewItemMutation = useMutation(addNewItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: name
        .trim()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' '),
      size: Number(size),
      quantity: Number(quantity),
      location: location.trim(),
    };

    addNewItemMutation.mutate(formData);
  };

  return (
    <>
      <div
        onClick={onClose}
        className='fixed top-0 left-0 h-screen w-full z-40 bg-slate-900/50'
      ></div>
      <form
        onSubmit={handleSubmit}
        className={`border bg-white z-50 p-6 rounded-lg flex flex-col gap-4 shadow-2xl ${className}`}
      >
        <div className='flex flex-col'>
          <label>Name:</label>
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
          className='bg-green-600 w-full rounded-xl py-2 text-white'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default NewItemForm;
