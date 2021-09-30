import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { DropDownItemList } from "../../../interfaces/DropDownItem";

import "../SelectBoxStyles.css";

interface InputBoxProps {
  toggleState: () => void;
  selected: DropDownItemList;
  clearSelected: () => void;
}

const SingleInputBox = ({
  toggleState,
  selected,
  clearSelected,
}: InputBoxProps) => {
  return (
    <>
      <div
        role='button'
        onKeyPress={() => toggleState()}
        onClick={() => toggleState()}
        className='inputField'
      >
        <input
          value={selected[0]?.value}
          placeholder='Select your class'
          className='customInput'
        ></input>

        {selected.length > 0 ? (
          <div
            className='icon'
            role='button'
            onClick={() => {
              clearSelected();
              toggleState();
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        ) : (
          <div
            className='icon'
            role='button'
            onClick={() => {
              toggleState();
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        )}
      </div>
    </>
  );
};

export default SingleInputBox;
