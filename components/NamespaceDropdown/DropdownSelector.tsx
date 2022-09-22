import { useState } from 'react';
import NamespaceLabel from './DropdownLabel';

const DropdownSelector = ({
  onClick,
  children,
}: {
  onClick: any;
  children: any;
}) => {
  return (
    <button
      onClick={onClick}
      className='flex gap-2 items-center w-full  px-4 py-4 border-y border-y-slate-600  hover:bg-slate-900 cursor-pointer'
    >
      {children}
    </button>
  );
};

export default DropdownSelector;
