import React from 'react';

const TableRow = ({ onClick, data }: { onClick: any; data: any }) => {
  const { id, ...rest } = data;
  const values = Object.values(rest);
  return (
    <tr
      onClick={onClick}
      className={`border ${
        2 % 2 === 0 ? 'bg-slate-100' : 'bg-slate-150'
      }  hover:bg-slate-300 hover:cursor-pointer`}
    >
      {values.map((value) => {
        return (
          <td className='p-4' key={Math.random()}>
            {value as string}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
