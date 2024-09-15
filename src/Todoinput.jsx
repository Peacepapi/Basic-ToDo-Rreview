import { useState } from "react"

export default function TodoInput({handleAddTodos, todoValue, setTodoValue}) {

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter to do..." />
            <button onClick={() => {
                handleAddTodos(todoValue);
                setTodoValue('');
            }}>Add</button>
        </header>
    )
}