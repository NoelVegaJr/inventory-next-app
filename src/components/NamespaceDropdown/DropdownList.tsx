import React from 'react';

const DropdownList = ({
  options,
  additionalItems,
  listStyles,
  listItemStyles,
  itemClick,
}: {
  options: any;
  additionalItems: any;
  listStyles: any;
  listItemStyles: any;
  itemClick: any;
}) => {
  return (
    <ul className={`cursor-pointer bg-white border  ${listStyles}`}>
      {options.map((option: any) => {
        return (
          <li
            onClick={() => itemClick(option)}
            key={option.id}
            className={`${listItemStyles}`}
          >
            {option.value}
          </li>
        );
      })}
      {additionalItems.map((option: any, index: any) => {
        return option;
      })}
    </ul>
  );
};

export default DropdownList;
