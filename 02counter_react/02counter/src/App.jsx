import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let addValue = () =>{
    if(count < 20){
      setCount(count + 1)
    }
  }

  let substractValue = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Counter Value : {count}</h1>

      <button onClick={addValue}>Add Button</button>
      <p></p>
      <button onClick={substractValue}>Substract Button</button>

      <h2>Galti se aa gaya counter abhi karde bhai upadate {count}</h2>
    </>
  )
}

export default App
