import React, { useState } from 'react'
import flogo from '../../assets/images/logo.webp'
import '../footer/Footer.css'
import fb from '../../assets/images/fb.png'
import instra from '../../assets/images/instagram.png'
import whatsapp from '../../assets/images/whatsapp.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Footer = () => {

    const initialState={
        firstname:"",
        lastname:"",
        email:"",
        mobaile:"",
        message:""
    }

    const [enquiri,setEnquiri] = useState(initialState)

    const onChangefun = (e)=>{
        setEnquiri({...enquiri,[e.target.name]:e.target.value})
    }

    const onSubmitfun = async (e)=>{
        e.preventDefault()
        
        if(enquiri.firstname !== "" && enquiri.lastname !== "" && enquiri.email !== "" && enquiri.mobaile !== ""){
            await axios.post("http://localhost:8000/enquires",enquiri)
            .then(respo=>{
                console.log(respo.data)
                setEnquiri({...initialState})
            })
            toast.success("Form is successfully submited")
        }else{
            toast.error("Please enter all fields")
        }
       
    }
    
  return (
    <>
    <div id='contactus' className='footersect'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='flogo' src={flogo} alt='' />
                    <p>Ignite your inner strength with our tried-and-true fitness regimens, designed to unleash your potential and guide you towards reaching your optimal self</p>
                    <div className='scoialicons'>
                        <Link to='https://www.instagram.com/fitnessbynumber/?igshid=MWZjMTM2ODFkZg%3D%3D' target='_blank'><img src={instra} alt='' /></Link>
                       
                        <Link to='#' target='_blank'><img src={whatsapp} alt='' /></Link>
                        <Link to='#' target='_blank'><img src={fb} alt='' /></Link>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h3>Contact Us</h3>
                    <form onSubmit={onSubmitfun}>
                    <div className='row'>                       
                       <div className='col-md-6'>
                            <input type='text' value={enquiri.firstname} name='firstname' className="form-control my-2" placeholder='Enter your first name' onChange={onChangefun} />
                        </div>
                        <div className='col-md-6'>
                            <input type='text' value={enquiri.lastname} name='lastname' className="form-control my-2" placeholder='Enter your last name' onChange={onChangefun} />
                        </div>
                        <div className='col-md-6'>
                            <input type='email' value={enquiri.email} name='email' className="form-control my-2" placeholder='Enter your email name' onChange={onChangefun} />
                        </div>
                        <div className='col-md-6'>
                            <input type='text' value={enquiri.mobaile} name='mobaile' mobaile className="form-control my-2" placeholder='Enter your phone name' onChange={onChangefun} />
                        </div>
                        <div className='col-md-12'>
                            <textarea value={enquiri.message} className="form-control my-2" name='message' placeholder='Message' onChange={onChangefun}/>
                        </div>
                        <div className='col-md-12'>
                            <button className='btn btn-warning mt-3'>Submit</button>
                        </div>                       
                    </div>
                    </form>
                    <ToastContainer/>
                </div>
            </div>
        </div> 
    </div>
    <div className='footercopy'>
       <div className='container'>
       <div className='row'>
            <div className='col-md-12 text-center'>
                <p>Copyright © 2023 Fitness By Number</p>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Footer