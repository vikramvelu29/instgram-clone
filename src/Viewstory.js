import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

function Viewstory() {
    const {id,tot}=useParams()
 const navigate=useNavigate()

    const[story,setstory]=useState(null)
    useEffect(()=>{
        fetch(`http://localhost:5000/story/${id}`)
        .then(data=>data.json())
        .then(data=>setstory(data))
        .catch(err=>console.log(err))
    },[id])
    if(id>tot || id<=0){
        navigate('/')
    }

  return (
    <div>
        {story ? <div className='d-flex justify-content-center align-items-center'>
           <Link to={`http://localhost:3000/story/${Number(id)-1}/${tot}`} > <i className="fa-solid fa-arrow-left mx-3"></i></Link>
            <img  className='story vh-100' src={story.story_img} alt='story'/>
           <Link to={`http://localhost:3000/story/${Number(id)+1}/${tot}`}> <i className="fa-solid fa-arrow-right mx-3"></i></Link>
        </div>:<div>loadin data...</div>}
    </div>
    
  )
}

export default Viewstory