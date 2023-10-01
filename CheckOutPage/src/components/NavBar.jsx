import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-row justify-evenly p-5 text-lg'>
        <p>Home</p>
        <h1 className='text-3xl'>Logo</h1>
        <p>Basket
            <span className='align-top text-xs bg-red-600 px-2 py-1 rounded-full text-white ml-1'>0</span>
        </p>
    </div>
  )
}

export default NavBar