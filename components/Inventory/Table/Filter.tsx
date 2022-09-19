import React from 'react';

const Filter = ({ setValue }: { setValue: Function }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='Search item'
        className='p-2 rounded outline-none'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Filter;
