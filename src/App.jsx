import { useState } from "react"
import TodoInput from "./Todoinput"
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = new useState([
    "eat",
    "Sleep",
    "Workout"
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} />
    </>
  )
}

export default App
