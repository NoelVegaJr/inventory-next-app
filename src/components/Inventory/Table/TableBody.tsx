import React from 'react';
import TableRow from './TableRow';

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

const TableBody = ({ onRowClick, data, headers }: any) => {
  return (
    <tbody>
      {data.map((item: any) => {
        return (
          <TableRow
            key={item.id}
            headers={headers}
            item={item}
            onClick={() => {
              onRowClick(item);
            }}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
