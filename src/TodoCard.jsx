import React from 'react'

export default function TodoCard({children}) {
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
        </div>
    </li> 
  )
}
