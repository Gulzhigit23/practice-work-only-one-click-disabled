import React from 'react'
import './disabled.css'

 function Card(props) {
    const nameOfClass = props.checked ? "disabled" : "active";
  return (
    <div className={nameOfClass} onClick={props.onClick}>
  {props.text}
    </div>
  )
}
export default Card