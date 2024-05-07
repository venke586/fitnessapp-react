import React from 'react'
import aboutimg from '../assets/images/about-img.webp'

const Aboutus = () => {
  return (
    <>
    <div id='aboutus' className='container'>
        <div className='row align-items-center'>
          <div className='col-md-8'>
          <h2>Who We Are</h2>
          <div className='line'></div>
          <p>We are your partners in progress, your allies in your pursuit of health and vitality. Led by a team of two passionate fitness enthusiasts, Samrat & Vishal, our team has experienced the empowering body transformation too. Fitness by Number is not just here to guide you, we’re here to empower you to rewrite your story.</p>
          </div>
          <div className='col-md-4'>
            <img className='m-5' src={aboutimg} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus