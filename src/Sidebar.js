import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate=useNavigate()
  return (
    <div className='mx-3'>
        <div className='d-flex flex-column gap-3 mt-3  position-fixed'>
            {/* <img classNameName='logo-text' src='public\assest\instagram-text.png' alt='' /> */}
            <div className='inst'>Instagram</div>
            <div><i className="fa-solid fa-house"></i>home</div>
            <div><i className="fa-solid fa-magnifying-glass"></i>search</div>
            <div><i className="fa-solid fa-compass"></i>Explore</div>
            <div><i className="fa-solid fa-circle-play"></i>reels</div>
            <div><i className="fa-solid fa-message"></i>message</div>
            <div><i className="fa-solid fa-bell"></i>notification</div>
            <div><i className="fa-solid fa-circle-plus"></i>create</div>
            <div onClick={()=>{navigate('/profile')}}><i className="fa-solid fa-user"></i>profile</div>
        </div>
        <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-4 mx-1'>
            <div><i className="fa-brands fa-threads"></i>thread</div>
            <div><i className="fa-solid fa-bars"></i>more</div>
        </div>
    </div>
  )
}

export default Sidebar