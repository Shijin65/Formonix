import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar bg-slate-800 text-primary-content ">
  <div className="flex-none ms-5">
<img src="https://i.pinimg.com/564x/f4/af/b9/f4afb9a17a5653b4432694619271f133.jpg" alt="" className='h-14 rounded-full' />    
  </div>
  <div className="flex-1">
    <p className='text-2xl font-bold ms-2' style={{fontfamily: 'Cookie'}}>Company Name</p>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost me-6">
        HOME
    </button>
  </div>
</div>
  )
}
