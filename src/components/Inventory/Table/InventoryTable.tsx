import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import Filter from './Filter';
import EditItemForm from '../Item/EditItemForm';

const InventoryTable = ({ namespaceId }: { namespaceId: any }) => {
  const [filter, setFilter] = useState('');
  const [activeItem, setActiveItem] = useState();
  const [editItem, setEditItem] = useState(false);
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(['items'], async () => {
    const response = await fetch(`/api/namespaces/items`);
    const data = await response.json();
    return data;
  });

  const itemClickHandler = (item: any) => {
    setActiveItem(item);
    setEditItem(true);
  };

  const closeFormHandler = () => {
    setEditItem(false);
  };
  let filteredItems;

  if (!isLoading && items) {
    filteredItems = items.filter((item: any) => {
      return (
        item.name.trim().toLowerCase().includes(filter.trim().toLowerCase()) &&
        item.namespaceId === namespaceId
      );
    });
  }

  return (
    <>
      <Filter setValue={setFilter} />
      {editItem && (
        <EditItemForm item={activeItem} closeForm={closeFormHandler} />
      )}
      <div className='h-full overflow-y-scroll border w-full relative'>
        {items && (
          <Table
            headers={['name', 'size', 'quantity', 'location']}
            data={filteredItems}
            onRowClick={itemClickHandler}
          />
        )}
      </div>
    </>
  );
};

export default InventoryTable;
