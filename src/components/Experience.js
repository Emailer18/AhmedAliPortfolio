import React from 'react'
import '../assets/css/Experience.css'
import SOS from '../assets/images/company/SOS.png'
import Exp from '../assets/images/experience.png'
import JS from '../assets/images/company/js.png'
import NIB from '../assets/images/company/nib.png'
import MCB from '../assets/images/company/mcb.png'
import SC from '../assets/images/company/standard-chartered.png'
import Ajman from '../assets/images/company/ajman.png'
import Noor from '../assets/images/company/noor.png'
import NUB from '../assets/images/company/nub.png'

function Experience() {
  return (
    <div className="experience-wrapper" id="experience">
              <span className="personal-heading-container experience-heading"><img src={Exp} alt="" class="personal-image"/> <h1 class="personal-heading">EXPERIENCE </h1></span>

        <div className="experience-container">
            <div className="experience sos" data-aos='fade-right'>
              <div className="img-container">
                <img src={SOS} alt="" className="exp-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>SOS Pakistan</h2>
               <small> <h4 className='exp-position'><i>August 2023 - Present</i> ; COO Global Ops & Development</h4></small>
              </div>
            </div>

            <div className="experience" data-aos='fade-left'>
              <div className="img-container">
                <img src={JS} alt="" className="exp-img js-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>JS Bank</h2>
               <small> <h4 className='exp-position'><i>2018 - 2023</i> ; Group Head Operations</h4></small>
              </div>
            </div>

            <div className="experience" data-aos='fade-right'>
              <div className="img-container" >
                <img src={MCB}  alt="" className="exp-img mcb-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>MCB Bank</h2>
               <small> <h4 className='exp-position'><i>July 2017 - July 2018</i> ; Divisional Head Operations</h4></small>
              </div>
            </div>


            <div className="experience "  data-aos='fade-left'>
              <div className="img-container">
                <img src={NIB} alt="" className="exp-img nib-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>NIB Bank</h2>
               <small> <h4 className='exp-position'><i>July 2015 - June 2017</i> ; Group Head Operations</h4></small>
              </div>
            </div>

        
            <div className="experience" data-aos='fade-right'>
              <div className="img-container">
                <img src={SC}  alt="" className="exp-img sc-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>Standard Chartered Bank</h2>
               <small> <h4 className='exp-position'><i>Feb 2014 - July 2015</i> ; Head of Branch Banking & Proximity</h4></small>
              </div>
            </div>

            <div className="experience"  data-aos='fade-left'>
              <div className="img-container">
                <img src={NUB}  alt="" className="exp-img sc-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>Nuran Bank</h2>
               <small> <h4 className='exp-position'><i>Mar 2013 - Feb 2014</i> ; Chief Operations Officer</h4></small>
              </div>
            </div>

            <div className="experience" data-aos='fade-right'>
              <div className="img-container">
                <img src={Ajman}  alt="" className="exp-img mcb-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>Ajman Bank</h2>
               <small> <h4 className='exp-position'><i>Feb 2011 - June 2012</i> ; Head of Retail Operations</h4></small>
              </div>
            </div>




            <div className="experience"  data-aos='fade-left'>
              <div className="img-container">
                <img src={Ajman}  alt="" className="exp-img mcb-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>Ajman Bank</h2>
               <small> <h4 className='exp-position'><i>June 2008 - Sep 2009</i> ; Head of Retail of Products</h4></small>
              </div>
            </div>

            <div className="experience" data-aos='fade-right'>
              <div className="img-container">
                <img src={Noor}  alt="" className="exp-img mcb-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>Noor Islamic</h2>
               <small> <h4 className='exp-position'><i>Apr 2007 - May 2008</i> ; Head of Consumer Service Delivery & Head of Command Center</h4></small>
              </div>
            </div>


            <div className="experience"  data-aos='fade-left'>
              <div className="img-container">
                <img src={SC}  alt="" className="exp-img sc-img" />
              </div>
              <div className="experience-text">
                <h2 className='exp-company'>Standered Chartered Bank</h2>
               <small> <h4 className='exp-position'><i>Sep 1992 - Apr 2007</i> ; Head of Consumer Service Delivery</h4></small>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Experience