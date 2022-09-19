import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ children }: { children: JSX.Element[] }) => {
  return <table className=' w-full text-sm'>{children}</table>;
};

export default Table;
