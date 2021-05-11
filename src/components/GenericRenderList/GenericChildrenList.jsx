import React from "react";

export default function GenericRenderList({ data, render }) {
  if (!data && !render ) return <p>No data or render prop provided</p>
  console.log(data)
  if (data.length === 0) return <p>no data found</p>
  return (
    <React.Fragment>
      { data.map((item) => render(item)) }
    </React.Fragment>
  );
}
