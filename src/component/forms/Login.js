import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
      
    const submitFun = async(e)=>{
        e.preventDefault()
        const responce = await axios.get("http://localhost:8000/users")
        const data = responce.data
        const userData = data.find(user=>user.email === email)
       
        if (email !== "" && password !== "") {  
              if(userData){
                if (userData.password !== password) {                  
                  toast.warning("Enter your valid password");
                } else {
                    localStorage.setItem("Email",email)
                    localStorage.setItem("isLoggedIn",true)                    
                    window.location.href="/dashbord"
                    toast.success("Successfully loged in")
                }

              }else{
                toast.error("User not forund")
              }
          } else {
            // Username not found
            toast.error("Enter your valid email and password")
          }
          
        
    }
  return (
    <>
     <div className='innerpagebanner'>
      <div className='inneroverlay'>
    <Navbar />
    </div>
    </div>
    <div className='container my-4'>
        <div className='row justify-content-center'>
            <div className='col-md-4 text-center mt-3 shadow-lg p-3 mb-2 bg-body-tertiary rounded py-3'>
            <h2>Login</h2>
    <p>ARE YOU READY TO CHASE YOUR BETTER SELF?</p>
        
        <form onSubmit={submitFun}>
         <div className='mt-2'>
            <input className='form-control' type='email' name="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className='mt-2'>
            <input className='form-control' type='password' name='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <button className='btn btn-warning w-100 mt-2'>
            Sign 
        </button>
        <ToastContainer/>
        </form>
        <p className='my-3'>Not a member yet?<Link to="/signup"> Register now.</Link></p>

            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login