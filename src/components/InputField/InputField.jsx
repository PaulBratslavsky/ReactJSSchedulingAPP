import React from "react";
import classNames from 'classnames'
import './input-field.scss'
export default function InputField({type = "text", label, name, placeholder, onChange, value = "", error = false}) {
  const [isFocused, setFocused] = React.useState(false)

  function focusedClass() {
    if (!isFocused && value.length === 0) return "pb_label-down"
    if (value) return ""
  }

  function errorClass() {
    if (error) return 'is-invalid' 
    else return ''
  }

  return (
    <div className='form-floating mb-3'>
      <input
        className={classNames('form-control',errorClass())}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={onChange}
        value={value}
      />
      { label && <label htmlFor={name} className={classNames(focusedClass())}>{label}</label> }
    </div>
  );
}
