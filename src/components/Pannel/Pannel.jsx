import React from "react";
import classNames from "classnames";
import "./pannel.scss";
export default function Pannel({ children, className }) {
  return <div className={classNames('pb_pannel', className)}>{children}</div>;
}
