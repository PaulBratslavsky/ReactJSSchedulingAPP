import React from "react";
import classNames from "classnames";
import "./pannel.scss";


import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../../redux/slices/countSlice"

export default function Pannel({ children, className }) {


  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  console.log(count, "count")

  return <div className={classNames('pb_pannel', className)}>{children}   <button onClick={() =>dispatch(increment())}>add one</button>
            {count}
            <button onClick={() => dispatch(decrement())}>minus one</button></div>;
}
