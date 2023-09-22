import { useState } from 'react'
import './App.css'

function App() {
  
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBMI] = useState("")
  const [message, setMessage] = useState("")

  const calculateBMI = (e) => {
    e.preventDefault()

    if(weight === 0 || height === 0){
      alert("pls enter valid values")
    }
    else{
      let bmi = (weight / (height * height))
      setBMI(bmi.toFixed(1))


      //BMI message logic

      if(bmi < 25){
        setMessage("You are Underwight")
      }
      else if(bmi >= 25 && bmi < 30){
        setMessage("You are normal")
      }
      else{
        setMessage("You are Overweight") 
      }

    }
  }

  return (
    <>
    <div className='w-full bg-slate-500 flex justify-center py-3'>
    <h1 className='text-3xl font-bold'>BMI Calculator</h1>
    </div>

    
      <div className='flex-col rounded-lg w-1/3 mx-auto bg-slate-500 my-28 py-4'>
        <form className='flex flex-col w-60 gap-2 mx-auto'>
          <label htmlFor="weight" className='text-white font-bold text-xl '>Weight (kg) :</label>
            <input type="number" 
              name='weight' 
              placeholder='Enter weight'
              className='outline placeholder:p-2'
              value={weight}
              onChange={(e)=>(setWeight(e.target.value))}          
            />
          <label htmlFor="weight" className='text-white font-bold text-xl'>Height (mt) :</label>
            <input type="number" 
              name='weight' 
              placeholder='Enter height'
              className='outline '
              value={height}
              onChange={(e)=>(setHeight(e.target.value))}  
            />
          <button type='submit' onClick={calculateBMI} className=' mx-auto p-1 rounded-lg active:scale-75 w-20 mt-3 bg-black text-white'>Calculate</button>

        </form>

        <div className='w-full mt-4 font-bold text-lg flex flex-col items-center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
      </div>
      </div>
    
    </>
  )
}

export default App
