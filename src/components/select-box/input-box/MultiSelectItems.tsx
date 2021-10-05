import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DropDownItemList } from "../../../interfaces/DropDownItem";

interface MultiSelectItemsProps {
  selectedList: DropDownItemList;
  deleteItems: (id: number) => void;
}

const MultiSelectItems = ({
  selectedList,
  deleteItems,
}: MultiSelectItemsProps) => {
  return (
    <div>
      {selectedList.map((current) => {
        return (
          <div>
            {current.shortHand}
            <FontAwesomeIcon
              onClick={() => deleteItems(current.id)}
              icon={faTimes}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectItems;
