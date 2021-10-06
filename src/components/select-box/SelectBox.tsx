import React, { useState, useRef, useEffect } from "react";
import MultiSelectItem from "./input-box/multi-select/MultiSelectItem";
import SingleSelectItem from "./input-box/single-select/SingleSelectItem";
import { DropDownItemList } from "../../interfaces/DropDownItem";
import SingleInputBox from "./input-box/single-select/SingleInputBox";
import MultiSelectInputBox from "./input-box/multi-select/MultiSelectInputBox";

interface SelectBoxProps {
  multiSelect: boolean;
  items: DropDownItemList;
}

const SelectBox = ({ multiSelect = false, items }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);

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

  const handleOnClickSingle = (item: string) => {
    setSelected(item);
    toggleState();
  };

  return (
    <>
      {!multiSelect ? (
        <div className='mainBox'>
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
        </div>
      ) : (
        <div className='mainBox'>
          <MultiSelectInputBox
            toggleState={toggleState}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
          {open && (
            <div ref={myRef} className='multiSelect'>
              {items.map((item) => (
                <div key={item.id} role='button'>
                  <MultiSelectItem
                    setSelectedList={setSelectedList}
                    selectedList={selectedList}
                    item={item}
                    checked={selectedList.includes(item)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SelectBox;
