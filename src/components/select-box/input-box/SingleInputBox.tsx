import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../SelectBoxStyles.css";

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
  useEffect(() => console.log(selected), [selected]);
  return (
    <>
      <div
        role='button'
        onKeyPress={() => toggleState()}
        onClick={() => toggleState()}
        className='inputField'
      >
        <input
          value={selected}
          placeholder='Select your class'
          className='customInput'
        ></input>

        {selected ? (
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
          <div className='icon' role='button'>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        )}
      </div>
    </>
  );
};

export default SingleInputBox;
