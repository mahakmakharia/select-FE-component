import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DropDownItemList } from "../../../../interfaces/DropDownItem";
import "../../SelectBoxStyles.css";

interface SelectedItemsProps {
  selectedList: DropDownItemList;
  deleteItems: (id: number) => void;
}

const SelectedItems = ({ selectedList, deleteItems }: SelectedItemsProps) => {
  return (
    <>
      {selectedList.map((current) => {
        return (
          <div className='selectedItem'>
            <div className='selectedText'>{current.shortHand}</div>
            <FontAwesomeIcon
              onClick={() => deleteItems(current.id)}
              icon={faTimes}
              className='icon'
            />
          </div>
        );
      })}
    </>
  );
};

export default SelectedItems;
