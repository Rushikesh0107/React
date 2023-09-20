import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rushikesh0107')
    //     .then((res)=>res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className=' text-white bg-orange-700 text-center text-4xl p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="profile image" width={300} />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/rushikesh0107");
    return response.json();
}