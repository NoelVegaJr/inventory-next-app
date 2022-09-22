import { useState } from 'react';
import DropdownLabel from './DropdownLabel';
import DropdownSelector from './DropdownSelector';
import DropdownList from './DropdownList';
import ReactPortal from '../ReactPortal';

const Dropdown = ({
  options,
  additionalOptions = [],
  onChange,
  className,
  listStyles,
  listItemStyles,
  labelStyles,
}: {
  options: any;
  additionalOptions: any;
  onChange: any;
  className: any;
  listStyles: any;
  listItemStyles: any;
  labelStyles: any;
}) => {
  const [expand, setExpand] = useState(false);
  const [value, setValue] = useState(options[0].value);

  const handleListItemClick = (option: any) => {
    setValue(option.value);
    onChange(option);
    setExpand(false);
  };

  return (
    <>
      {expand && (
        <div
          onClick={() => setExpand(false)}
          className='fixed top-0 left-0 h-screen w-screen bg-black/20 '
        />
      )}
      <div className={`${className}`}>
        <DropdownSelector onClick={() => setExpand(!expand)}>
          <DropdownLabel text={value} className={labelStyles} />
        </DropdownSelector>
        {expand && (
          <>
            <DropdownList
              options={options}
              additionalItems={additionalOptions}
              listStyles={listStyles}
              listItemStyles={listItemStyles}
              itemClick={handleListItemClick}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Dropdown;
