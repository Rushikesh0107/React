import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './Results'
import useBreedList from './useBreedList'

function SearchParams() {
    const [location, setLocation] = useState('')
    const [animals, setAnimals] = useState('')
    const [breed, setBreed] = useState('')
    const [breeds] = useBreedList(animals)
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, [])

    async function requestPets() {
        const response = await axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animals}&location=${location}&breed=${breed}`)
        
        setPets(response.data.pets);
        // console.log(response.data);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        requestPets();
    }


  return (
    <div className='w-full'>
        
        
        <div className='flex mt-10 justify-evenly'>
        <div className='flex justify-around h-[22rem] mt-10 ml-5'>
            <form className='flex flex-col bg-red-300  p-5 gap-3 rounded-lg w-80' 
            onSubmit={e => {handleFormSubmit(e)}}
            >
            
                <label htmlFor="location" className='text-lg font-semibold'>
                    Location : 
                    <div>
                    <input id="location" placeholder="Location" 
                    className='p-2 border-2 border-black rounded-lg w-full'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    />
                    </div>
                </label>

                <label htmlFor="animal" className='text-lg font-semibold'>  
                    Animal :
                    <div>
                    <select id="animal" className='p-2 border-2 border-black rounded-lg w-full'
                    value={animals}
                    onChange={(e) => {
                        setAnimals(e.target.value);
                        setBreed(' ');
                        }
                    }
                    >
                        <option>Select</option>
                        <option>dog</option>
                        <option>cat</option>
                        <option>bird</option>
                        <option>rabbit</option>
                        <option>reptile</option>
                    </select>
                    </div>
                </label>

                <label htmlFor="breed" className='text-lg font-semibold'>
                    Breed :
                    <div>
                    <select id="breed" className='p-2 border-2 border-black rounded-lg w-full'
                    disabled={breed.length === 0}
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    >
                        <option>Select</option>
                        {
                            breeds.map(breed => (
                                <option key={breed} value={breed}>{breed}</option>
                            ))
                        }

                        
                    </select>
                    </div>
                </label>

                <button
                className='bg-black text-white p-2 rounded-lg mt-3 font-semibold active:scale-75 transition-all'
                >Submit</button>
            </form>
        </div>


                <Results pets={pets}/>
            
        </div>
            
    </div>
  )
}

export default SearchParams