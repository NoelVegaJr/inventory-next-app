import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar/Navbar';
import InventoryTable from '../components/Inventory/Table/InventoryTable';
const Inventory = () => {
  return (
    <div className='h-screen  flex flex-col  '>
      <Navbar />
      <div className='flex grow overflow-hidden'>
        <Sidebar />
        <div className='w-full flex flex-col gap-2 p-2 relative'>
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
