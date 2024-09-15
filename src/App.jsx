import { useState } from "react"
import TodoInput from "./Todoinput"
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = new useState([])
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  return (
    <>
      <TodoInput setTodoValue={setTodoValue} todoValue={todoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} 
        handleDeleteTodos={handleDeleteTodos} 
        handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
