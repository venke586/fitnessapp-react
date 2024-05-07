import React, {  useState } from 'react'
import Navbar from '../header/Navbar'
import axios from 'axios'
import Footer from '../footer/Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Signup = () => {
        const [users,setUsers] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

      const onchangeFun =(e)=>{
        setUsers({...users,[e.target.name]:e.target.value})
    }

    const submitFun = async (e)=>{
        e.preventDefault()       
        const userData = {
        name:users.name,
        email:users.email,
        phone:users.phone,
        password:users.password
          };

          if(users.name !== "" && users.email !== "" && users.phone !== "" && users.password !== ""){ 
                   try{
                    await axios.post("http://localhost:8000/users", userData)                   
                    localStorage.setItem("Email",users.email)
                    localStorage.setItem("isLoggedIn",true)
                    window.location.href="/dashbord"
                   }catch(err){
                    if(err.message){
                      toast.error("User is allredy exist")
                    }
                   }
          }else{
            toast.warning("Please enter all fields")
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
            <h2>Looks like you're new here!</h2>
    <p>Sign up with your details to get started</p>
        
        <form onSubmit={submitFun}>
        <div className='mt-2'>
            <input className='form-control' type='text' name="name" placeholder='Enter your name' onChange={onchangeFun} />
        </div>

        <div className='mt-2'>
            <input className='form-control' type='email' name="email" placeholder='Enter your email' onChange={onchangeFun} />
        </div>

        <div className='mt-2'>
            <input className='form-control' type='phone' name="phone" pattern="[789][0-9]{9}" placeholder='Enter your mobailno' onChange={onchangeFun} />
        </div>

        <div className='mt-2'>
            <input className='form-control' type='password' name='password' placeholder='Enter your password' onChange={onchangeFun} />
        </div>

        <button className='btn btn-warning mt-2 w-100'>
            Signup 
        </button>
        </form>
        <ToastContainer/>
        
        <p className='my-4'>Already Registered User? <Link to="/login"> Click here to login</Link></p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup