import React from 'react'
import NavBar from '../components/NavBar'
import { storeData } from '../Data'
import HomeProduct from '../components/HomeProduct'

function Home() {
  return (
    <>
    <NavBar />
    <div className='w-[85%] mx-auto pb-10'>
    <h2 className='text-2xl'>New In</h2>
    <div className='w-full flex flex-col items-center sm:grid sm:grid-cols-3 gap-3'>
        {
            storeData.map((item) => <HomeProduct 
            key={new Date().getTime() + Math.random()}
            item = {item}
            />)
        }
    </div>
    </div>
    </>
  )
}

export default Home