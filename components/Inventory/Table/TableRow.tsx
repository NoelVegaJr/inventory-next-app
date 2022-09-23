import React from 'react';

const destructureItem = (keys: any, item: any) => {
  // return a list of destrcutured items based on keys
  let destructuredItem: any = {};
  keys.map((key: any) => {
    {
      destructuredItem[key] = item[key];
    }
  });
  return destructuredItem;
};

const TableRow = ({ onClick, item, headers }: any) => {
  console.log(item);
  const values = Object.values(item);
  console.log(values);
  return (
    <tr
      onClick={onClick}
      className={` ${
        2 % 2 === 0 ? 'bg-gray-100' : 'bg-slate-150'
      }  hover:bg-gray-200 hover:cursor-pointer  border border-gray-900 `}
    >
      {headers.map((header: any) => {
        return (
          <td className='p-4 text-gray-900 font-medium' key={Math.random()}>
            {item[header]} {header === 'quantity' && item['unitQuantity']}
            {header === 'size' && item['unitSize']}
          </td>
        );
      })}
    </tr>
    // {/* {values.map((value: any) => {
    //   console.log(value);
    //   return (
    //     <td className='p-4 text-gray-900 font-medium' key={Math.random()}>
    //       {value as string}
    //     </td>
    //   );
    // })} */}
    // </tr>
  );
};

export default TableRow;
