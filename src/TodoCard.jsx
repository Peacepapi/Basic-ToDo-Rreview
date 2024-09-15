import React from 'react'

export default function TodoCard({children, handleDeleteTodos, handleEditTodo, index}) {
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={() => handleEditTodo(index)}>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            
            <button onClick={() => handleDeleteTodos(index)}>
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li> 
  )
}
