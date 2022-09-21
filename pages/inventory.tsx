import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import InventoryTable from '../components/Inventory/Table/InventoryTable';
import { useQuery } from '@tanstack/react-query';

const getNamespaces = async () => {
  const response = await fetch('/api/namespaces');
  const data = await response.json();
  return data;
};

const Inventory = () => {
  const [namespace, setNamespace] = useState({ id: null, name: null });
  const [activeSidebar, setActiveSidebar] = useState(false);
  const {
    isLoading,
    error,
    data: namespaces,
  } = useQuery(['namespaces'], getNamespaces);

  useEffect(() => {
    if (!isLoading && namespaces) {
      setNamespace(namespaces[0]);
    }
  }, [isLoading, namespaces]);
  const handleToggleSidebar = () => {
    console.log('show sidebar');
    setActiveSidebar(!activeSidebar);
  };

  return (
    <div className='h-screen  flex flex-col '>
      <Navbar showSidebar={handleToggleSidebar} />
      <div className='flex grow overflow-hidden'>
        <Sidebar
          show={activeSidebar}
          toggle={handleToggleSidebar}
          namespaces={namespaces}
          activeNamespace={namespace}
          setActiveNamespace={setNamespace}
        />
        <div className='w-full flex flex-col gap-2 p-2 relative'>
          <InventoryTable namespaceId={namespace?.id} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
