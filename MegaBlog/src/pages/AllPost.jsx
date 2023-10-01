import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/conf'
import { Container, PostCard} from '../Components'

function AllPost() {

    const[posts, setPost] =  useState([]);
    useEffect(()=>{}, [])
    appwriteService.getPost([]).then((posts) => {
        if(posts){
            setPost(posts.document)
        }
    })

  return (
    <div className='py-8'>
        <Container>
            {
                posts.map((post)=> (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post} />
                    </div>
                ))
            }
        </Container>
    </div>
  )
}

export default AllPost