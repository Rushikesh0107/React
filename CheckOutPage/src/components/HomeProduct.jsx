import React from 'react'
import {useDispatch} from 'react-redux'
import { addToBasket } from '../features/BasketSlice'

function HomeProduct({item}) {

  const dispatch = useDispatch();

  

  return (
    <div className='w-full border flex flex-col rounded-xl border-gray-200 shadow-lg'>
        <div className='w-full flex justify-center'>
        <img src={item.image} alt="" className=''/>
        </div>
        <div className='flex justify-between px-3 py-3'>
            <div>
            <p className='font-bold text-lg'>{item.name}</p>
            <p>{item.price}$</p>
            </div>
            <div>
                <button 
                className='bg-indigo-800 text-white p-2 rounded-full font-serif px-3 border'
                onClick={() => dispatch(addToBasket(item))}
                >
                    Add to Basket
                </button>
            </div>
        </div>
    </div>
  )
}

export default HomeProduct