import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'
import { useSelector } from 'react-redux'

function App() {

  const todos = useSelector(state => state.todos) 

  return (
    <>
    <AddTodo />
    <h2>Todo</h2>
    {
      todos.map((todo) => (<Todos key={todo.id} todo = {todo}/> ))
    }
    </>
  )
}

export default App
