import React from 'react';
import TableRow from './TableRow';

const TableBody = ({
  onRowClick,
  dataList,
}: {
  onRowClick: any;
  dataList: any;
}) => {
  return (
    <tbody>
      {dataList.map((item: any) => {
        return (
          <TableRow
            key={Math.random()}
            data={item}
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
