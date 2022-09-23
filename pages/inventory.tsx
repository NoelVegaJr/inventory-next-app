import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/WorkspaceNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import InventoryTable from '../components/Inventory/Table/InventoryTable';
import { useQuery } from '@tanstack/react-query';
import NamespaceDropdown from '../components/NamespaceDropdown/NamespaceDropdown';
import NewItemForm from '../components/Inventory/Item/NewItemForm';
import Modal from '../components/Modal/Modal';

const getNamespaces = async () => {
  const response = await fetch('/api/namespaces');
  const data = await response.json();
  return data;
};

const Inventory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [namespace, setNamespace] = useState({ id: null, name: null });
  const [newItem, setNewItem] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
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
    setShowSidebar(!showSidebar);
  };

  if (isLoading) {
    return <p> isloading</p>;
  }

  return (
    <>
      {modalOpen && (
        <Modal handleClose={() => setModalOpen(false)}>
          <h1 className='bg-green-600'>Hello</h1>
        </Modal>
      )}
      <div className='h-screen  flex flex-col '>
        <Navbar showSidebar={handleToggleSidebar} />
        <div className='flex grow overflow-hidden'>
          <Sidebar show={showSidebar} close={handleToggleSidebar}>
            <div>
              <h2 className='text-lg text-white p-6'>Daidone Electric</h2>
            </div>
            <NamespaceDropdown
              namespaces={namespaces}
              setActiveNamespace={setNamespace}
            />
          </Sidebar>
          <div className='w-full flex flex-col gap-2 p-2'>
            <div className='flex justify-between'>
              <h2 className='p-2 text-2xl'>Inventory</h2>

              <button
                onClick={(e) => {
                  setNewItem(!newItem);
                }}
                className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white'
              >
                New Item
              </button>
            </div>
            {newItem && (
              <NewItemForm
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12'
                closeForm={() => setNewItem(false)}
                namespaceId={namespace.id}
              />
            )}
            <InventoryTable namespaceId={namespace?.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
