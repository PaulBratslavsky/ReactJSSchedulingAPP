import React from "react";
// import classNames from "classnames";
import "./date-field.scss";

export default function DateField({ label, name, onChange, value }) {
  return (
    <div className='mb-3'>
      {label && (
        <label htmlFor={name} className="">
          {label}
        </label>
      )}
      <input
        className='form-control'
        type='datetime-local'
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
