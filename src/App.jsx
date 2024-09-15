import { useState, useEffect } from "react"
import TodoInput from "./Todoinput"
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = new useState([])
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem('todos');
    if(!localTodos) return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  }, [])
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
