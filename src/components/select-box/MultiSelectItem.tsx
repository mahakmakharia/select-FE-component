import React from "react";
import "./SelectBoxStyles.css";

interface ItemProps {
  value: string;
}

const MultiSelectItem = ({ value }: ItemProps) => {
  return (
    <div>
      <input type='checkbox' /> <span className='customCheckBox'></span> {value}
    </div>
  );
};

export default MultiSelectItem;
