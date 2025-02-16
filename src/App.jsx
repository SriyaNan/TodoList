import { useState, useEffect } from "react"
import Todoinput from "./components/todoinput"
import Todolist from "./components/Todolist"

function App() {

  const [todos, setTodos] = useState([
  ])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex !== index
    })
     persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleedit(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDelete(index)
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }
    let localTodos=localStorage.getItem("todos")
    if (!localTodos){
      return

    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <Todolist handleedit={handleedit} handleDelete={handleDelete} todos={todos} />

    </>
  )
}

export default App
