import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Suggestion() {
    const[profile,setprofile]=useState(null)
    const[suggestion,setsuggestion]=useState([])
    const[follow,setfollow]=useState(true)


    useEffect(()=>{
        fetch('http://localhost:5000/profile')
        .then(data=>data.json())
        .then(data=>setprofile(data))
        .catch(err=>console.log(err))


        fetch('http://localhost:5000/suggestion')
        .then(data=>data.json())
        .then(data=>setsuggestion(data))
        .catch(err=>console.log(err))
    },[])
    const handlefollow=async(id,username)=>{
      axios.post('http://localhost:5000/follows',{"id":id,"username":username})
      .then(data=>(
        alert("follow"))
      )
      .catch(err=>console.log(err))
    }
  return (
    <div className='mx-5' >
        {profile ?
        <div className=''>
            <div key={profile.id} className='d-flex mt-5 '>
             <img className="img-prf" src={profile.profile_img} alt='post'/>
                     <p className='name mt-1'>{profile.username}</p>
                     <p className='ms-auto text-primary '>switch</p>
           </div>
           
        </div>
         
         :<div>
            <p>loading data....</p>
            </div>}
            <div className='d-flex mt-4'>
            <p>suggestion for you</p>
            <p className='ms-auto'>see all</p>
           </div>
          {suggestion ?
          <div>
             {suggestion.length>0 ?
           (
            <div>
              {suggestion.map((sugg)=>(
                <div key={sugg.id} className='d-flex mt-2 '>
                 <img className="img-prf" src={sugg.profile_img} alt='post'/>
                       <p className='name  '>{sugg.username}</p>
                       <button  className='text-primary ms-auto btn text-white btn-follow' onClick={()=>{handlefollow(sugg.id,sugg.username)}} >{follow?"unfollow":"follow"}</button>
               </div>
              ))}
           </div>
           ):
           (
            <div>
                <p>loading data...</p>
            </div>
           )}
          </div>:
          <div>
           <p>loading data...</p>
          </div>}
    </div>
  )
}

export default Suggestion