import React from 'react';

const TableHead = ({ headers }: { headers: string[] }) => {
  return (
    <thead className='text-left bg-slate-600 sticky top-0'>
      <tr className='text-slate-100'>
        {headers.map((header) => {
          return (
            <th key={header} className='p-4'>
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
