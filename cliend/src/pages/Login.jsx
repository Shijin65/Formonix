import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from 'mdb-react-ui-kit';
import { adminLogin } from '../services/allApi';




function Login() {
    const [admindetails,setAdmindetails]=useState({
        email:"",
        pswd:""
    })
    console.log(admindetails)
    const navigate=useNavigate()

    const handleLogin = async (e) => {
        
        const { email, pswd } = admindetails
        if (!email || !pswd) {
            swal({
                title: "Incomplete Fields",
                text: "Please fill the fields completely",
                icon: "error",
                button: "ok",
              });
        }
        else {
            const result = await adminLogin(admindetails)
            console.log(result)
            if (result.status === 200) {
                sessionStorage.setItem("admin", JSON.stringify(result.data.existingadmin))
                sessionStorage.setItem("token", result.data.token)
                // alert('login successfull')
                swal({
                    title: "Successful",
                    text: "Login successfull",
                    icon: "success",
                    button: "Continue",
                });
                navigate('/formoad')
            }
            else {
                swal({
                    title: "error",
                    text: `${result.response.data}`,
                    icon: "error",
                    button: "ok",
                });
            }

        }
    }

  return (
    <>
    <section style={{ height: '110vh' }} className='background-radial-gradient overflow-hidden'>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                    <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        Hello Admin
                        <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>Welcome back...Please Login</span>
                    </h1>
                    <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                    </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                    <div className="card bg-glass">
                        <div className="card-body px-4 py-5 px-md-5">
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-light" htmlFor='useremail'>Email</label>
                                    <input  type="email" id='useremail' className="form-control " style={{ color: 'black' }}  onChange={(e) => setAdmindetails({ ...admindetails, email: e.target.value })} />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-light" htmlFor='pswd'>Password</label>
                                    <input type="password" id='pswd' className="form-control " style={{ color: 'black' }}
                                    onChange={(e) => setAdmindetails({ ...admindetails, pswd: e.target.value })} />
                                </div>
                                <div className='d-flex justify-content-center flex-column mb-4'>
                                    {/* <Link to={'/professionalregister'}>Don't have an account? Please Sign Up</Link> */}
                                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>

  )
}

export default Login
