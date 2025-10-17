import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const[profile,setprofile]=useState(null)
    const[follow,setfollow]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/profile')
        .then(data=>(setprofile(data.data)))


        axios.get('http://localhost:5000/follows')
        .then(data=>setfollow(data.data))
        .catch(err=>console.log(err))
    },[])


    function handlechange(e){
             setprofile((prev)=>({
                ...prev,
                [e.target.name] : e.target.value
             }))
    }
    const handleupdate=async()=>{
        axios.put('http://localhost:5000/profile',profile)
        .then(alert("update"))
        .catch(err=>console.log(err))
    }
    const handledelete=async(id)=>{
        axios.delete(`http://localhost:5000/follows/${id}`)
        .then(data=>alert("unfollow"))
        .catch(err=>console.log(err))
    }

  return (
    <div className='mt-5 mx-5'>
        {profile?
            <div >
                <img src={profile.profile_img} alt='profile' className='profile rounded-circle'/>
                <h2>{profile.username}</h2>

                <input type='text' name='username'
                onChange={handlechange}
                value={profile.username} className='form-control w-30 my-4'/>

                <input type='text' name='profile_img'
                onChange={handlechange}
                value={profile.profile_img} className='form-control w-30 my-4'/>

                 <button className='btn btn-success' onClick={handleupdate}>update</button>
            </div>
            :<div>loading profile...</div>}

        <div className='mt-3'>
            {follow.length>0?(
              <div>
                 {follow.map(datas=>(
                    <div key={datas.id} className='d-flex '>
                        <h5 className='my-2'>{datas.username}</h5>
                        <button onClick={()=>{handledelete(datas.id)}} className='btn btn-follow ms-auto btn-profile-unfollow'>unfollow</button>
                    </div>
                 ))}
                </div>):(
            <div>loading data....</div>)
            }
       </div>
    </div>
  )
}

export default Profile