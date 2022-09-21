import React from 'react';

const HamburgerMenu = ({ onClick }: { onClick: any }) => {
  return (
    <button
      onClick={onClick}
      className=' w-10 h-10 rounded flex flex-col justify-center gap-2 px-1 md:hidden'
    >
      <div className='w-full h-0.5 bg-yellow-500 rounded-lg'></div>
      <div className='w-full h-0.5 bg-yellow-500 rounded-lg'></div>
      <div className='w-full h-0.5 bg-yellow-500 rounded-lg'></div>
    </button>
  );
};

export default HamburgerMenu;
