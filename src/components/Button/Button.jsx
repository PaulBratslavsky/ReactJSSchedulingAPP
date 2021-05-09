import React from 'react'
import './button.scss'
import classNames from 'classnames'

export default function Button({type = "button", value="Btn Text", colorClass="btn-primary", onClick, margin})  {
  return (
    <div>
      <input className={classNames('pb_button btn btn-sm',colorClass, margin)} type={type} value={value} onClick={onClick}/>
    </div>
  )
}
