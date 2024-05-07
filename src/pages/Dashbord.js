import React from 'react'
import Navbar from '../component/header/Navbar'
import './Dashbord.css'
import Footer from '../component/footer/Footer';
import Userdataforadmin from '../component/Userdataforadmin'
import Userdata from '../component/Userdata';

const Dashbord = () => {
  const userEmail = localStorage.getItem("Email")

  return (
    <>
    <div className='innerpagebanner'>
      <div className='inneroverlay'>
      <Navbar/>
      </div>
      </div>
      {userEmail === "admin@gmail.com"?<Userdataforadmin />:<Userdata />}   

      <Footer/>
    
      </>
  )
}

export default Dashbord