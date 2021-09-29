import React from "react";

interface ItemProps {
  value: string;
}

const SingleSelectItem = ({ value }: ItemProps) => {
  return <div>{value}</div>;
};

export default SingleSelectItem;
