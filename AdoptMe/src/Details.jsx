import React from 'react'
import {useQuery} from '@tanstack/react-query'
import fetchPet from './fetchPet'
import {useParams} from 'react-router-dom'

function Details() {

  const {id} = useParams();
  const result = useQuery(['details', id], fetchPet);

  if(result.isLoading) {
    return <h1>Loading...</h1>
  }

  if(result.isError) {
    return <h1>Error</h1>
  }

  const pet = result.data.pets[0];

  return (
    <>
    <div className='flex mt-20 items-center  h-screen flex-col'>
      <div className='bg-red-300 rounded-lg w-1/2 flex flex-col gap-5 p-10'>
      <div className='w-full'>
        <h1 className='text-3xl font-bold text-center'>{pet.name}</h1>
      </div>
      <div className='w-full flex justify-center gap-5'>
        {pet.images[0] && <img src={pet.images[0]} alt="pet image" className='rounded-full w-40'/>}
        {pet.images[1] && <img src={pet.images[1]} alt="pet image" className='rounded-full w-40'/>}
        {pet.images[2] && <img src={pet.images[2]} alt="pet image" className='rounded-full w-40'/>}
      </div>

      <div className=''>
        <h2 className='font-semibold text-center text-lg'>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
      </div>

      <div>
        <p>
          {pet.description}
        </p>
      </div>

      <div className='flex justify-center'>
        <button className='bg-black text-red-200 p-2 rounded-lg w-1/2 font-bold active:scale-75 transition-all'>Adopt {pet.name}</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Details