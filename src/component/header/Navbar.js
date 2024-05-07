import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
import '../../component/header/Navbar.css'
import { HashLink } from 'react-router-hash-link'
import { BoxArrowInLeft, BoxArrowInRight, List } from 'react-bootstrap-icons'
import { ToastContainer, toast } from 'react-toastify'


const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const navigate = useNavigate()
  const logingAuth = localStorage.getItem("isLoggedIn")
  const loginEmail = localStorage.getItem("Email")

  const logOutfun =()=>{    
    window.localStorage.removeItem("isLoggedIn")    
    window.location.href="/"
    toast.success("Logout Successfully")
  }

  const menuTogale =()=>{
    setShowNav(!showNav)
  }


  return (
    <>
   
    <div className='container py-3'>
      <div className='row align-items-center'>

        <div className='col col-sm-3 col-md-4 col-lg-4'>
        <Link to='/'><img className='logo' src={logo} alt='' /></Link>        
        </div>
                
         
       <div className='col col-sm-9 col-md-8 col-lg-8'>
       <nav class="navbar navbar-expand-lg">  
        <div className='d-flex ms-auto'>
          <div className='menu_icon' onClick={menuTogale}><List/></div>
          <ul class={`navbar-nav menu ${showNav && 'active'}`}>
            <li class="nav-item">
            <Link to='/'>Home</Link>
            </li>
            <li class="nav-item">
              <HashLink smooth to="/#aboutus">About Us</HashLink>
            </li>           
            <li class="nav-item">
            <HashLink smooth to="/#programs">Programs</HashLink>
            </li>
            <li class="nav-item">
            <HashLink smooth to="/#plans">Plans</HashLink>
            </li>
            
            {logingAuth?<li class="nav-item"><HashLink smooth to="/dashbord">Dashbord</HashLink></li>:null}

            <li class="nav-item">
            <HashLink smooth to="/#contactus">Contact Us</HashLink>
            </li>

          </ul>
          {logingAuth?(<><button class="btn btn-warning ms-2" onClick={()=>logOutfun()}><BoxArrowInLeft/> {loginEmail}</button></>):
          <button class="btn btn-outline-warning ms-2" onClick={()=>navigate("/login")}><BoxArrowInRight/> Login</button>
          } 
          <ToastContainer />
          </div>
          </nav>
          
          </div>
       
      
  
      </div>
    </div>
    </>
  )
}

export default Navbar