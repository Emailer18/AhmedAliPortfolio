import React from 'react'
import '../assets/css/About.css'
import Personal from '../assets/images/business-card.png'
import Education from '../assets/images/profiles.png'

function About() {
  return (

    <>
      <div className="about-intro" id='about'>
        <p className='about-text'>
          Astute, result oriented leader having 32 years of diversified, extensive and international experience in banking operations & technology by ensuring the delivery of quality service to customers, the projection of a professional and warm image, maintenance of operational controls and continues improvement in operations efficiency. Critical thinker in risk and control management as to review systems and checks on a regular basis, identifying bottlenecks and areas of improvement in liaison with Audit, Compliance, Finance, Business, Service Quality & HR Teams.
        </p>
      </div>

      <div className="about-container">
        <div className="personal" >
          <span className="personal-heading-container"><img src={Personal} alt="" class="personal-image" /> <h1 class="personal-heading">PERSONAL PARTICULARS</h1></span>
          <div className='particular-wrapper'>
            <div className="particular-container">
              <div className="particular-name"><h5>Date of Birth: </h5></div>
              <div className="particular">
                <div className='particular-box blue'>3 March 1971</div></div>
            </div>

            <div className="particular-container">
              <div className="particular-name"><h5>Languages: </h5></div>
              <div className="particular">
                <div className='particular-box green'>English</div>
                <div className='particular-box pink'>Urdu</div>
                <div className='particular-box yellow' >Malayalam</div>

              </div>
            </div>
          </div>


        </div>
        <div className="academics">
          <span className="personal-heading-container"><img src={Education} alt="" class="personal-image" /> <h1 class="personal-heading">ACADEMICS</h1></span>
          <div className='particular-wrapper'>
            <div className="particular-container">
              <div className="particular-name"><h5>Education: </h5></div>
              <div className="particular">
                <div className='particular-box blue'>MA in Economics</div>
                <div className='particular-box yellow'>MA in Business Adiministration</div>

              </div>
            </div>

            <div className="particular-container">
              <div className="particular-name"><h5>Trainings Attended:</h5></div>
              <div className="particular">
                <div className='particular-box green'>Six Sigma</div>
                <div className='particular-box blue'>ISO Certification</div>
                <div className='particular-box pink' >Lean Methodology</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About