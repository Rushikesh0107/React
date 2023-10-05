import React from 'react'
import {useDispatch} from 'react-redux'
import {increamentAmount, decreamentAmount} from '../features/BasketSlice'
import {useSelector} from 'react-redux'

function Product({name, image, price, amount}) {

    const dispatch = useDispatch();
    
  return (
    <div className='flex w-[60%] mb-5 mx-auto border  justify-between px-10 items-center rounded-lg'>
        <div className=''>
            <img src={image} alt="glasses image" className='w-full rounded-lg h-24' />
        </div>
        <div className=''>
            <p className='text-xl'>{name}</p>
            <p>{price}$</p>
        </div>
        <div className='flex flex-col '>
            <p>Amount :</p>
            <button
            onClick={()=> dispatch(increamentAmount(name))}
            >+</button>
            <p className='text-center'>{amount}</p>
            <button
            onClick={()=>dispatch(decreamentAmount(name))}
            >-</button>
        </div>
    </div>
  )
}

export default Product