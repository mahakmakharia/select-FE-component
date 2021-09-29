import React, { useState } from "react";
import MultiSelectItem from "./MultiSelectItem";
import SingleSelectItem from "./SingleSelectItem";

const SelectBox = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const toggleState = () => setOpen(!open);

  return (
    <>
      <div className='inputField'>
        <input></input>
        <div className='icon'></div>
      </div>
      <div className='singleSelect'>
        <SingleSelectItem />
      </div>
      <div className='multiSelect'>
        <MultiSelectItem />
      </div>
    </>
  );
};

export default SelectBox;
