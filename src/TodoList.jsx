import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList() {
    let todos = [
        "eat",
        "Sleep",
        "Workout"
    ];

  return (
    <ul className='main'>
      { todos.map((todo, todoIndex) => <TodoCard key={todoIndex}><p>{todo}</p></TodoCard>)}
    </ul>
  )
}
