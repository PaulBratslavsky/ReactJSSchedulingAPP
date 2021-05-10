import React from 'react'
import './button.scss'
import classNames from 'classnames'

export default function Button({type = "button", value="Btn Text", addClass="btn-primary", onClick, margin})  {
  return (
    <div>
      <input className={classNames('pb_button btn',addClass, margin)} type={type} value={value} onClick={onClick}/>
    </div>
  )
}
