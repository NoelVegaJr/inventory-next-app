import React, { useState } from 'react';
import { items } from '../../data';

const InventoryTable = () => {
  const [filter, setFilter] = useState('');

  const filteredItems = items.filter((item) => item.name.includes(filter));

  return (
    <div className='h-full overflow-y-scroll border w-full'>
      <table className=' w-full text-sm'>
        <thead className='text-left bg-slate-600 sticky top-0'>
          <tr className='text-slate-100'>
            <th className='p-4'>Item</th>
            <th className='p-4'>Size</th>
            <th className='p-4'>Quantity</th>
            <th className='p-4'>Location</th>
          </tr>
        </thead>
        <tbody className=''>
          {filteredItems.map((item, index) => {
            return (
              <tr
                onClick={(e) => {
                  console.log('click');
                }}
                key={Math.random()}
                className={`border ${
                  index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300'
                } ${index === filteredItems.length - 1 && 'bg-red-300'}`}
              >
                <td className='p-4 '>{item.name}</td>
                <td className='p-4'>{item.size}</td>
                <td className='p-4'>{item.quantity}</td>
                <td className='p-4'>{item.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
