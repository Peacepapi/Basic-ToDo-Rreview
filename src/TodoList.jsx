import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleDeleteTodos }) {


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return <TodoCard
                    key={todoIndex}
                    handleDeleteTodos={handleDeleteTodos}
                    index={todoIndex}><p>{todo}</p>
                </TodoCard>
            })}
        </ul>
    )
}
