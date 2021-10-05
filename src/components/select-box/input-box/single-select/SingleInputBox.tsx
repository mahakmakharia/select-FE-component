import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../../SelectBoxStyles.css";

interface InputBoxProps {
  toggleState: () => void;
  selected: string;
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
        className='customInput'
      >
        <input
          value={selected}
          type='text'
          placeholder='Select your class'
          className='inputField'
        ></input>

        {selected ? (
          <div
            className='icon-box'
            role='button'
            onClick={() => {
              clearSelected();
              toggleState();
            }}
          >
            <FontAwesomeIcon className='icon' icon={faTimes} />
          </div>
        ) : (
          <div className='icon-box' role='button'>
            <FontAwesomeIcon className='icon' icon={faChevronDown} />
          </div>
        )}
      </div>
    </>
  );
};

export default SingleInputBox;
