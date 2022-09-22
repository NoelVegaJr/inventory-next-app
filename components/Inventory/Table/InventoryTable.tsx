import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import Filter from './Filter';
import EditItemForm from '../Item/EditItemForm';
import NewItemForm from '../Item/NewItemForm';

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
          <Table>
            <TableHead headers={['Item', 'Size', 'Quantity', 'Location']} />
            <TableBody dataList={filteredItems} onRowClick={itemClickHandler} />
          </Table>
        )}
      </div>
    </>
  );
};

export default InventoryTable;
