import { useState } from 'react';

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: name.trim(),
      size: Number(size),
      quantity: Number(quantity),
      location: location.trim(),
    };

    const response = await fetch('/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
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
