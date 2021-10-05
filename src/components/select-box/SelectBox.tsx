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
  const [selected, setSelected] = useState("");
  const [selectedList, setSelectedList] = useState<DropDownItemList>([]);

  const myRef = useRef<HTMLInputElement>(null);

  const toggleState = () => setOpen((p) => !p);
  const handleClickOutside = (e: any) => {
    if (myRef && !myRef?.current?.contains(e.target)) setOpen(false);
  };
  const clearSelected = () => setSelected("");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected, open]);

  const handleOnClick = (item: DropDownItem) => {
    if (!selectedList.some((current) => current.id === item.id)) {
      setSelectedList([...selectedList, item]);
    } else {
      let selectionAfterRemoval: DropDownItemList = selectedList;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );

      setSelectedList([...selectionAfterRemoval]);
      console.log(selectedList);
    }
  };

  const handleOnClickSingle = (item: string) => {
    setSelected(item);
    toggleState();
    console.log(selected);
  };

  return (
    <>
      {!multiSelect ? (
        <>
          <SingleInputBox
            toggleState={toggleState}
            selected={selected}
            clearSelected={clearSelected}
          />
          {open && (
            <div ref={myRef} className='singleSelect'>
              {items.map((item) => (
                <div
                  key={item.id}
                  role='button'
                  onClick={() => handleOnClickSingle(item.value)}
                >
                  <SingleSelectItem value={item.value} />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <MultiSelectInputBox
            toggleState={toggleState}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
          {open && (
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
          )}
        </>
      )}
    </>
  );
};

export default SelectBox;
