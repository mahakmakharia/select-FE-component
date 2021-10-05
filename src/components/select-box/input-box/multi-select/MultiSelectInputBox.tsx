import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DropDownItemList } from "../../../../interfaces/DropDownItem";

import "../../SelectBoxStyles.css";
import MultiSelectItems from "./SelectedItems";

interface InputBoxProps {
  toggleState: () => void;
  selectedList: DropDownItemList;
  setSelectedList: (list: DropDownItemList) => void;
}

const MultiSelectInputBox = ({
  toggleState,
  selectedList,
  setSelectedList,
}: InputBoxProps) => {
  const deleteItems = (id: number) => {
    let updatedList = selectedList.filter((item) => item.id !== id);
    setSelectedList([...updatedList]);
  };

  return (
    <>
      <div
        role='button'
        onKeyPress={() => toggleState()}
        onClick={() => toggleState()}
        className='customInput'
      >
        <div className='inputField'>
          {selectedList.length === 0 ? (
            <div className='placeholder'>Select your standard</div>
          ) : (
            <MultiSelectItems
              deleteItems={deleteItems}
              selectedList={selectedList}
            />
          )}
        </div>

        {selectedList.length === 0 ? (
          <div className='icon-box' role='button'>
            <FontAwesomeIcon className='icon' icon={faChevronDown} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MultiSelectInputBox;
