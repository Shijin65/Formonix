import React from 'react'
import {useNavigate} from "react-router-dom"

function Home() {
    const Navigate =useNavigate()
  return (
    <div className='h-screen text-center justify-center items-center content-center'>
        <button className='btn btn-info' onClick={()=>{Navigate("/form", { replace: true })}}>get started</button>
    </div>
  )
}

export default Home