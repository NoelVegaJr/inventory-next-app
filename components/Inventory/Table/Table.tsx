import React from 'react';

const Table = ({ children }: { children: JSX.Element[] }) => {
  return <table className=' w-full text-sm border'>{children}</table>;
};

export default Table;
