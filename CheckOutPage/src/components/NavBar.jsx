import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function NavBar() {
  const Count = useSelector(state => state.basket)
  return (
    <div className='flex flex-row justify-evenly p-5 text-lg'>
        <Link to='/'><p>HOME</p></Link>
        <h1 className='text-3xl'>LOGO</h1>
        <Link to='/basket'>
        <p>BASKET
            <span className='align-top text-xs bg-red-600 px-2 py-1 rounded-full text-white ml-1'>{Count.basketCount}</span>
        </p>
        </Link>
    </div>
  )
}

export default NavBar