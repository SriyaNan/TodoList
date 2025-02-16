import React from 'react'

export default function Todocard(props) {
  const {children, handleDelete,index,handleedit}=props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={()=>{
          handleedit(index)
        }}>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
          handleDelete(index)
        }}>
        <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
