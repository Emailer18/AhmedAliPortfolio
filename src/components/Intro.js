import React from 'react'
import '../assets/css/Intro.css'
import Profile from '../assets/images/ahmed.png'
import Facebook from '../assets/images/facebook.png'
import Whatsapp from '../assets/images/whatsapp.png'
import Mail from '../assets/images/envelope.png'
import Resume from '../assets/images/Resume.pdf'



function Intro() {
  return (
    <div className="intro-wrapper" id="intro">
        <div className="intro-container">
            <div className="image-container">
                <div className="profile-img-container">
                <img src={Profile} alt="" className="profile-img" />
                </div>
                
            </div>
            <div className="intro-text-container">
                <h1 className='intro-text'>AHMED ALI USUF</h1>
        </div>
        <div className="resume-btn-container">
          <div className="btn-wrapper">
          <a href={Resume} download="Ahmed Ali Usuf - Resume"><button className='resume-btn'>DOWNLOAD RESUME</button></a>
          </div>
          <div className="socials-container">
            <ul>
            <a href="https://www.facebook.com/ahmed.usuf" target='_blank' rel='noreferrer'> <li className='social-img-item'><img className="social-img" src={Facebook} alt="" /></li></a> 
            <a href="https://api.whatsapp.com/send/?phone=%2B923008269878&text&type=phone_number&app_absent=0 "><li className='social-img-item'><img className="social-img" src={Whatsapp} alt="" /></li></a> 
            <a href="mailto:assarsmy@gmail.com"><li className='social-img-item'><img className="social-img" src={Mail} alt="" /></li></a>  
            </ul>
          </div>
       

        
        </div>
        </div>
        
    </div>
  )
}

export default Intro