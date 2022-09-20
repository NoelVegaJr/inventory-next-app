import React from 'react';

const TableRow = ({ onClick, data }: { onClick: any; data: any }) => {
  const { id, ...rest } = data;
  const values = Object.values(rest);
  return (
    <tr
      onClick={onClick}
      className={` ${
        2 % 2 === 0 ? 'bg-gray-100' : 'bg-slate-150'
      }  hover:bg-gray-200 hover:cursor-pointer  border border-gray-900 `}
    >
      {values.map((value) => {
        return (
          <td className='p-4 text-gray-900 font-medium' key={Math.random()}>
            {value as string}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
