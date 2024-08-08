import React, { useEffect, useState } from 'react';
import ShowData from './ShowData';
import Navbar from '../Components/Navbar';
import Table from '../Components/Table';
import notfound from '../assets/hand-drawn-404-error.png'
import { Link } from 'react-router-dom';

function Admin() {
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  }, []);

  console.log(isValidate);


  if (!isValidate) {
    return (
      <div className='failedAuthentication  flex-column  ' style={{height:'100vh'}}>
        <div className='d-flex justify-content-center'>
        <img src={notfound} height={'600px'} width={'500px'}  alt="" />
       
        </div>
        
        <h3 className='text-center text-warning fw-bolder'> Oops....Page not found</h3>
        <h3 className='text-center text-warning fw-bolder'> Please Login</h3>
        <div className='d-flex justify-content-center' >
          <Link to={'/'}> <button className='btn btn-warning'>home</button></Link>
        
        </div>
       
       
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ShowData />
    </div>
  );
}

export default Admin;
