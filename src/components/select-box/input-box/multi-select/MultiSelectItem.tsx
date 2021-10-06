import React, { useState } from "react";
import {
  DropDownItem,
  DropDownItemList,
} from "../../../../interfaces/DropDownItem";
import "../../SelectBoxStyles.css";

interface ItemProps {
  item: DropDownItem;
  selectedList: DropDownItemList;
  setSelectedList: (list: DropDownItemList) => void;
  checked: boolean;
}

const MultiSelectItem = ({
  item,
  selectedList,
  setSelectedList,
  checked,
}: ItemProps) => {
  const [check, setChecked] = useState(checked);

  const handleOnClick = (item: DropDownItem) => {
    if (!selectedList.some((current) => current.id === item.id)) {
      setSelectedList([...selectedList, item]);
      setChecked((prev) => !prev);
    } else {
      let selectionAfterRemoval: DropDownItemList = selectedList;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );

      setSelectedList([...selectionAfterRemoval]);
      setChecked((prev) => !prev);
    }
  };

  return (
    <div className='container' onClick={() => handleOnClick(item)}>
      <input type='checkbox' checked={check} />
      <span className='customCheckBox'></span>
      {item.value}
    </div>
  );
};

export default MultiSelectItem;
