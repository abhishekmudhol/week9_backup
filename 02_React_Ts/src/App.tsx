import { useState } from 'react'
import './App.css'

interface TodoType {
  title : string,
  discription : string
}

interface TodoInput {
  todo : TodoType
}

interface TodoArray {
  todos : TodoType[]
}

function App() {
  const [todos ,] = useState([
    {
      title : 'Gym',
      discription : 'Go and do workout'
    }
  ]) 

  return (
    <>
      <Todos todos={todos}/>
    </>
  )
}

function Todos({todos} :TodoArray){
  return(
    <>
      <div>
        {
          todos.map((todo:TodoType)=><Todo todo={todo}/>)
        }
      </div>
    </>
  )
}

function Todo({todo}:TodoInput){
  return(
    <div>
      <b>{todo.title}</b>
      <b>{todo.discription}</b>
    </div>
  )
}

export default App