import React from "react";
import SelectBox from "./components/select-box/SelectBox";
import { DropDownItemList } from "./interfaces/DropDownItem";

function App() {
  const items: DropDownItemList = [
    {
      id: 0,
      value: "First Standard",
      shortHand: "First st",
    },
    {
      id: 1,
      value: "Second Standard",
      shortHand: "Second",
    },
    {
      id: 2,
      value: "Third Standard",
      shortHand: "Third st",
    },
  ];

  return (
    <>
      <SelectBox multiSelect={false} items={items} />
      <SelectBox multiSelect={true} items={items} />
    </>
  );
}

export default App;
