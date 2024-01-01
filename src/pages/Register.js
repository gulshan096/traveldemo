import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        mobile:"",
        password:"",
    });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
   const handleSubmit = (event) =>{
    event.preventDefault();
   
    axios.post('http://127.0.0.1:8000/api/register',inputs)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

   }    
    

  return (
    <>
                <section className="h-100 gradient-form" style={{background: "#eee"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">
                                                <div className="text-center">
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{width: "185px" }} alt="logo" />
                                                    <h4 className="mt-1 mb-5 pb-1">Please Register your account</h4>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    
                                                    <div className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example11">Name</label>
                                                        <input 
                                                            className="form-control" 
                                                            placeholder="Your name"
                                                            type="text" 
                                                            name="username"
                                                            value={inputs.username}
                                                            onChange={handleChange}
                                                         />
                                                        
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example11">Email</label>
                                                        <input 
                                                          className="form-control" 
                                                          placeholder="Your email address" 
                                                          type="email"
                                                          name="email"
                                                          value={inputs.email}
                                                          onChange={handleChange} 
                                                          
                                                          />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example11">Mobile</label>
                                                        <input 
                                                           className="form-control" 
                                                           type="text"
                                                           name="mobile"
                                                           placeholder="Your phone number" 
                                                           value={inputs.mobile}
                                                           onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                    <label className="form-label">Password</label>
                                                        <input  
                                                         className="form-control"
                                                         type="password"
                                                         name="password"
                                                         placeholder='Password'
                                                         value={inputs.password}
                                                         onChange={handleChange}
                                                         
                                                         />
                                                        
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" 
                                                        type="submit">Register
                                                
                                                        
                                                        </button>
                                                    
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Already have an account?</p>
                                                        <Link to="/login">
                                                        <button type="button" className="btn btn-outline-danger">Login</button>
                                                        </Link>
                                                    </div>

                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">We are more than just a company</h4>
                                                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Register