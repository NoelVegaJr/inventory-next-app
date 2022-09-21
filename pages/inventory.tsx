import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import InventoryTable from '../components/Inventory/Table/InventoryTable';

const Inventory = () => {
  const [activeNamespace, setActiveNamespace] = useState();
  const [activeSidebar, setActiveSidebar] = useState(true);
  const handleToggleSidebar = () => {
    console.log('show sidebar');
    setActiveSidebar(!activeSidebar);
  };

  const handleNamespaceChange = (id: any) => {
    setActiveNamespace(id);
  };

  return (
    <div className='h-screen  flex flex-col '>
      <Navbar showSidebar={handleToggleSidebar} />
      <div className='flex grow overflow-hidden'>
        <Sidebar
          show={activeSidebar}
          toggle={handleToggleSidebar}
          setActiveNamespace={handleNamespaceChange}
        />
        <div className='w-full flex flex-col gap-2 p-2 relative'>
          <InventoryTable namespaceId={activeNamespace} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
