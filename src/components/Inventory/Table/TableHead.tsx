import React from 'react';

const TableHead = ({ headers }: { headers: string[] }) => {
  return (
    <thead className='text-left bg-gray-900 sticky top-0'>
      <tr className='text-slate-100 border-l border-x-slate-900'>
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
