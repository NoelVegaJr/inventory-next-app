import React from 'react';

const DropdownLabel = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <>
      <p className={`${className}`}>{text}</p>
    </>
  );
};

export default DropdownLabel;
