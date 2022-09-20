import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import InventoryTable from '../components/Inventory/Table/InventoryTable';

const Inventory = () => {
  const [activeNamespace, setActiveNamespace] = useState();

  const handleNamespaceChange = (id: any) => {
    console.log(id);
    setActiveNamespace(id);
  };

  return (
    <div className='h-screen  flex flex-col  '>
      <Navbar />
      <div className='flex grow overflow-hidden'>
        <Sidebar setActiveNamespace={handleNamespaceChange} />
        <div className='w-full flex flex-col gap-2 p-2 relative'>
          <InventoryTable namespaceId={activeNamespace} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
