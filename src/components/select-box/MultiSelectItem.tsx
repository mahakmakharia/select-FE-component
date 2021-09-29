import React from "react";

interface ItemProps {
  value: string;
}

const MultiSelectItem = ({ value }: ItemProps) => {
  return <div>{value}</div>;
};

export default MultiSelectItem;
