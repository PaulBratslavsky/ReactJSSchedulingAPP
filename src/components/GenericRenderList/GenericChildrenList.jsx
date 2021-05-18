import React from "react";

export default function GenericRenderList2({ data, children }) {
  if (!data && !children) return <p>No data or children provided</p>;
  console.log(data);
  if (data.length === 0) return <p>no data found</p>;
  return data.map((item) => (
    <div key="item.id">{React.cloneElement(children, { item })}</div>
  ));
}
