import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Story() {
    const [story,setstory]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
      fetch('http://localhost:5000/story')
      .then(data=>data.json())
      .then(data=>setstory(data))
      .catch(err=>console.log(err))
    },[])
    var tot=0;
   

  return (
    <div className='d-flex'>
      <div className='d-none'>
        {tot=story.length}
      </div>
        {story.map(datas=>(
          <div key={datas.id} className='my-1 mx-2' onClick={()=>{navigate(`/story/${datas.id}/${tot}`)}}>
                <div className='story-bounder '>
                    <img className='story-img' src={datas.profile_img} alt='story' />
                </div>
                <p className='text-truncate'>{datas.username}</p>
          </div>

        ))}
    </div>
  )
}

export default Story