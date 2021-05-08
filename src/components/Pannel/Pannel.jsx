import React from "react";
import "./pannel.scss";
export default function Pannel({ children, withHover }) {
  return <div className='pb_pannel'>{children}</div>;
}
