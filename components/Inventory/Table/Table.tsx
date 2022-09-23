import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ headers, data, onRowClick }: any) => {
  return (
    <table className=' w-full text-sm border'>
      <TableHead headers={headers} />
      <TableBody headers={headers} data={data} onRowClick={onRowClick} />
    </table>
  );
};

export default Table;
