import React from 'react'
import { ButtonProps } from '../interfaces'

const Button = ({ text = 'Button', btnClass = '', cartQuant, onClick }: ButtonProps) => {
  return (
    btnClass === 'cart-btn' ? <button className={btnClass} onClick={onClick}>{text}({cartQuant})</button> :
    <button className={btnClass} onClick={onClick}>{text}</button>
  )
}

export default Button