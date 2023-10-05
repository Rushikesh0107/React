import React from 'react'
import NavBar from '../components/NavBar'
import {useSelector} from 'react-redux'
import Product from '../components/Product'

function Basket() {
  const items = useSelector(state => state.basket.basketVal)

  const total = useSelector(state => state.basket.total)
  return (
    <>
    <NavBar />
    <div>
      {
        items.map(item => 
            <Product 
            key={new Date().getTime() + Math.random()}
            name = {item.name}
            image={item.image}
            price={item.price}
            amount={item.amount}
            />
        )
      }
    </div>
    <div className='flex w-[50%] mx-auto justify-around'>
      <div className='text-2xl'>
        <p>Total :</p>
      </div>
      <div className='text-2xl font-bold'>{total}$</div>
    </div>
    </>

  )
}

export default Basket