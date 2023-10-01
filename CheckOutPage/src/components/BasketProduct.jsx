import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'

function BasketProduct() {
    const {products,total} = useSelector((store)=>store.basket)
  return (
    <div className='flex flex-col items-center gap-3 mt-7'>
        {
            products.map((item, i) => 
            <Product 
            key={new Date().getTime + Math.random()}
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
            /> 
            )
        }

        <div className='flex w-full justify-evenly font-bold text-2xl'>
            <p>Total</p>
            <p>{total}$</p>
        </div>
    </div>
  )
}

export default BasketProduct