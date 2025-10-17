import React, { useEffect, useState } from 'react'

function Post() {
   const[posts,setposts]=useState([])

   useEffect(()=>{
    fetch('http://localhost:5000/posts')
    .then((data)=>(data.json()))
    .then(data=>(setposts(data)))
    .catch(err=>(console.log(err)
    ))
    
   },[])

  return (
    <div className='d-flex justify-content-center'> 
        {posts.length>0 ?(
            <div>
                {posts.map((post)=>(
                    <div className='my-4'>
                        <div key={post.id} className='d-flex my-2'>
                          <img className="img-prf" src={post.profile_img} alt='post'/>
                           <div  className='d-flex  align-items-center mx-1'>
                            <p className='name'>{post.username}</p>
                           </div>
                        </div>
                           <img className='img-post' src={post.image_url}/>
                        <div className='d-flex mt-1 '>
                            <i className="fa-regular fa-heart  "></i>
                            <i className="fa-regular fa-comment"></i>
                            <i className="fa-regular fa-paper-plane"></i>
                        </div>
                        <b className=' my-0'>{post.likes} Likes</b>
                        <p className='my-0'>{post.comments[0].text}</p>
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        ):(
            <div>loading data....</div>
        )}
    </div>
  )
}

export default Post