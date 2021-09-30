import React, { useState, useRef, useEffect } from "react";
import MultiSelectItem from "./MultiSelectItem";
import SingleSelectItem from "./SingleSelectItem";
import { DropDownItem, DropDownItemList } from "../../interfaces/DropDownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleOnClick = (item: DropDownItem) => {
    if (!multiSelect) setSelected([item]);
    else {
      if (!selected.some((current) => current.id === item.id)) {
        setSelected([...selected, item]);
      } else {
        let selectionAfterRemoval: DropDownItemList = selected;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current.id !== item.id
        );

        setSelected([...selectionAfterRemoval]);
      }
    }
  };

  return (
    <>
      {!multiSelect ? (
        <div
          role='button'
          onKeyPress={() => toggleState()}
          onClick={() => toggleState()}
          className='inputField'
        >
          <input
            value={selected.length > 0 ? selected[0].value : undefined}
            placeholder='Select your class'
          ></input>
          <div className='icon'>
            <FontAwesomeIcon icon={faChevronDown} />
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      ) : (
        <div
          role='button'
          onKeyPress={() => toggleState()}
          onClick={() => toggleState()}
          className='inputField'
        >
          <div>Select you standard</div>
          {selected?.map((item) => item.value)}
          <div className='icon'></div>
        </div>
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
