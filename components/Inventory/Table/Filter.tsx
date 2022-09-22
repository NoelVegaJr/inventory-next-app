import React from 'react';

const Filter = ({ setValue }: { setValue: Function }) => {
  return (
    <form className='  grow'>
      <input
        type='text'
        placeholder='Search item'
        className='p-2 rounded outline-none w-full border border-slate-400/60'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Filter;
