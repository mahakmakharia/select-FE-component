import React, { useState, useRef, useEffect } from "react";
import MultiSelectItem from "./MultiSelectItem";
import SingleSelectItem from "./SingleSelectItem";
import { DropDownItem, DropDownItemList } from "../../interfaces/DropDownItem";
import SingleInputBox from "./input-box/SingleInputBox";
import MultiSelectInputBox from "./input-box/MultiSelectInputBox";

interface SelectBoxProps {
  multiSelect: boolean;
  items: DropDownItemList;
}

const SelectBox = ({ multiSelect = false, items }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);
  // const [clickedOutside, setClickedOutside] = useState(false);
  const [selected, setSelected] = useState<DropDownItemList>([]);

  const myRef = useRef<HTMLInputElement>(null);

  const toggleState = () => setOpen(!open);
  const handleClickOutside = (e: any) => {
    if (myRef && !myRef?.current?.contains(e.target)) setOpen(false);
  };
  const clearSelected = () => setSelected([]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleOnClick = (item: DropDownItem) => {
    if (!multiSelect) {
      let selection: DropDownItemList = [];
      selection.push(item);
      setSelected([...selection]);
      console.log(selected);
    } else {
      if (!selected.some((current) => current.id === item.id)) {
        setSelected([...selected, item]);
      } else {
        let selectionAfterRemoval: DropDownItemList = selected;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current.id !== item.id
        );

        setSelected([...selectionAfterRemoval]);
        console.log(selected);
      }
    }
  };

  return (
    <>
      {!multiSelect ? (
        <SingleInputBox
          toggleState={toggleState}
          selected={selected}
          clearSelected={clearSelected}
        />
      ) : (
        <MultiSelectInputBox
          toggleState={toggleState}
          selected={selected}
          clearSelected={clearSelected}
        />
      )}

      {open ? (
        multiSelect ? (
          <div ref={myRef} className='multiSelect'>
            {items.map((item) => (
              <div
                key={item.id}
                role='button'
                onClick={() => handleOnClick(item)}
              >
                <MultiSelectItem value={item.value} />
              </div>
            ))}
          </div>
        ) : (
          <div ref={myRef} className='singleSelect'>
            {items.map((item) => (
              <div
                key={item.id}
                role='button'
                onClick={() => handleOnClick(item)}
              >
                <SingleSelectItem value={item.value} />
              </div>
            ))}
          </div>
        )
      ) : null}
    </>
  );
};

export default SelectBox;
