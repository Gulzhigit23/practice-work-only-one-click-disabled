import React from 'react'
import './listTitle.css'

 function ListTitle(props) {
  return (
    <div>
    {props.getItems.map((item) => {
        return(
            <div className='childItem'>
                {item.title}
            </div>
        )
    })}
    </div>
  )
}
export default ListTitle