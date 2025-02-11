import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'


function App() {

  const [inputVal , setInputVal]=useState('')
  const [todos, setTodos]=useState([])

  function writeTodo(e){
       setInputVal(e.target.value)
  }

  function addTodo(){
    if(inputVal!=''){
      setTodos((prevTodos)=>[...prevTodos, inputVal])
      setInputVal('')
    }
  }

  function delTodo(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return  prevTodosIndex!=todoIndex
    })
  )
  }

  return (
    <>
      <h1>To Do List</h1>
      <InputContainer  inputVal={inputVal}  writeTodo={writeTodo}  addTodo={addTodo}/>
      <TodoContainer todos={todos}  delTodo={delTodo}/>
    </>
  )
}

export default App;
