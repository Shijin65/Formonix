import React, { useEffect, useState } from 'react'
import ShowData from './ShowData'
import Navbar from '../Components/Navbar'
import { getclient } from '../services/allApi'

function Admin() {

  const [clients,setClients]=useState([])

  const getClientdetails=async()=>{
    const result=await getclient()
    console.log(result);

  }

  useEffect(()=>{
    
    getClientdetails()

  },[])

  
  return (
<div>
    <Navbar/>
    <ShowData/>
</div>
  )
}

export default Admin