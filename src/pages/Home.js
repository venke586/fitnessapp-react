import React from 'react'
import Navbar from '../component/header/Navbar'
import '../pages/Home.css'
import aboutimg from '../assets/images/about-img.webp'
import programimg from '../assets/images/samrat.webp'
import customize from '../assets/images/customize.svg'
import goal from '../assets/images/goal.svg'
import motivation from '../assets/images/motivation.svg'
import plan from '../assets/images/plan.svg'
import regularcheckins from '../assets/images/regular-check-ins.svg'
import support from '../assets/images/support.svg'
import Footer from '../component/footer/Footer'
const Home = () => {
  return (
    <>
    <div className='bannersection'>
      <div className='bgoverlay'>
      <Navbar />
      <div className='container'>
        <div className='row align-items-center' style={{height:'500px'}}>
          <div className='col-md-6'>
          <h1>ARE YOU READY TO COUNT ?</h1>
        <button className='btn btn-warning w-25'>I’M READY!</button>
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* About section here     */}

      <div id='aboutus' className='container'>
        <div className='row align-items-center'>
          <div className='col-md-8'>
          <h2>Who We Are</h2>
          <div className='line'></div>
          <p>We are your partners in progress, your allies in your pursuit of health and vitality. Led by a team of two passionate fitness enthusiasts, Samrat & Vishal, our team has experienced the empowering body transformation too. Fitness by Number is not just here to guide you, we’re here to empower you to rewrite your story.</p>
          </div>
          <div className='col-md-4'>
            <img className='m-0 m-md-5' src={aboutimg} alt='' />
          </div>
        </div>
      </div>
      {/* End about section */}

      {/* Our programs section */}
      <div id='programs' className='ourprograms_sec'>
        <div className='bgoverlayTwo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Our Program</h2>
            <div className='lineTwo'></div>
            <p>Experience complete transformation with our 360 program boosting your fitness in every aspect from nutrition to mental wellbeing.  </p>
          
          <div className='row'>
            <div className='col-md-6'>
              <div className='iconbox'>
                <img src={customize} alt='' />
              <p>Personalized Nutrition Plans</p>
              </div>              
            </div>

            <div className='col-md-6'>
              <div className='iconbox'>
                <img src={goal} alt='' />
              <p>Goal Setting and Tracking</p>
              </div>              
            </div>

            <div className='col-md-6'>
              <div className='iconbox'>
                <img src={motivation} alt='' />
              <p>Mindset and Motivation</p>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='iconbox'>
                <img src={plan} alt='' />
              <p>Personalized Nutrition Plans</p>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='iconbox'>
                <img src={regularcheckins} alt='' />
              <p>Regular Check-ins & Accountability (Weekly)</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='iconbox'>
                <img src={support} alt='' />
              <p>Real-Time Support</p>
              </div>
            </div>
          </div>
          
          </div>
          <div className='col-md-6'>
            <div className='rightimg'>
            <img src={programimg} alt='' />
            </div>
           </div>
          </div>
        </div>
      </div>
      </div>
      {/* End of programs sectons */}

      <div id='plans' className='planssection'>
        <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <h3>Plans For You</h3>
            <div className='line'></div>
            <p>Power up with our tried & tested fitness plans tailored to unleash your potential and embark you on the journey of being the best you can be.</p>
            <button className='btn btn-warning'>START JOURNEY</button>
          </div>

          <div className='col-md-4'>
            <div className='planbox'>
            <h3>12 Weeks (3 Months) Transformation</h3>
          <p><span>Why 12 Weeks?</span></p>
<p>This duration is scientifically proven to create lasting habits, visible changes, and a strong foundation for a healthier lifestyle.</p>
          <h4>Price: ₹ 12,000/-</h4>
            </div>          
          </div>

          <div className='col-md-4'>
            <div className='planbox'>
            <h3>24 Weeks (6 Months) Transformation</h3>
          <p><span>Why 24 Weeks?</span></p>
          <p>For a more comprehensive transformation, this package allows us to dive deeper, optimise progress & achieve sustainable changes.</p>
          <h4>Price: ₹ 12,000/-</h4>
            </div>          
          </div>

        </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Home