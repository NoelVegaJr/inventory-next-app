import React from 'react';
import InventoryTable from '../components/Inventory/InventoryTable';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar/Navbar';
const Inventory = () => {
  return (
    <div className='h-screen  flex flex-col  '>
      <Navbar />
      <div className='flex grow overflow-hidden'>
        <Sidebar />
        <div className='w-full flex flex-col p-2'>
          <div className='p-2 border'>
            <button>Add Item</button>
          </div>
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
