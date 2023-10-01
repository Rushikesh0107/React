import React from 'react'
import {useDispatch} from 'react-redux'
import {increamentAmount, decreamentAmount} from '../features/BasketSlice'

function Product({name, price, image, amount}) {

  const dispatch = useDispatch();
  
  return (
    <div className='flex flex-row w-4/5 justify-around shadow-xl rounded-2xl p-2 bg-white'>

        <img src={image} alt="glass image" className=' overflow-hidden rounded-2xl w-60'/>

    <div className='w-full flex flex-col  ml-10 justify-center'>

        <p className='font-bold text-xl'>{name}</p>

        <p className=''> Price: {price}$</p>

        <button className='w-10 text-red-800 mt-2 font-semibold transition-all active:scale-75'>Remove</button>

    </div>

    <div className='w-full flex flex-col items-center justify-center'>

        <p>Amount:</p>

        <button 
        className='transition-all active:scale-75 bg-green-700 px-1 rounded-lg text-white font-bold'
        onClick={() => {dispatch(increamentAmount({name}))}} 
        >+</button>

        <p>{amount}</p>

        <button 
        className='transition-all active:scale-75 bg-red-700 px-1 rounded-lg text-white font-bold'
        onClick={() => {dispatch(decreamentAmount({name}))}}
        >-</button>

        </div>
    </div>
  )
}

export default Product