import React, { useState, useRef, useEffect } from "react";
import MultiSelectItem from "./MultiSelectItem";
import SingleSelectItem from "./SingleSelectItem";
import { DropDownItemList } from "../../interfaces/DropDownItem";

interface SelectBoxProps {
  multiSelect: boolean;
  items: DropDownItemList;
}

const SelectBox = ({ multiSelect = false, items }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);
  // const [clickedOutside, setClickedOutside] = useState(false);
  const [selected, setSelected] = useState("");

  const myRef = useRef<HTMLInputElement>(null);

  const toggleState = () => setOpen(!open);
  const handleClickOutside = (e: any) => {
    if (myRef && !myRef?.current?.contains(e.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <div
        role='button'
        onKeyPress={() => toggleState()}
        onClick={() => toggleState()}
        className='inputField'
      >
        <input
          ref={myRef}
          value={selected}
          placeholder='Select your class'
        ></input>
        <div className='icon'></div>
      </div>
      {open ? (
        multiSelect ? (
          <div className='multiSelect'>
            <MultiSelectItem />
          </div>
        ) : (
          <div className='singleSelect'>
            <SingleSelectItem />
          </div>
        )
      ) : null}
    </>
  );
};

export default SelectBox;
