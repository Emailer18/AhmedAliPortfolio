import React from 'react'
import '../assets/css/Career.css'
import { useEffect } from 'react'
import Badge from '../assets/images/badge.png'






function Career() {

    useEffect(() => {
        const btn  = document.getElementsByClassName('modal-heading')

        const text  = document.getElementsByClassName('modal-para')
        
        for (let i = 0; i < btn.length; i++) {
        
        
            btn[i].addEventListener('click', (e)=>{
               
                if(e.target !== btn[i]){
                for (let index = 0; index < text.length; index++) {
                 
                    text[index].classList.add('close')
                    
                }
                    
                text[i].classList.remove('close')
                text[i].classList.add('open')
                }
                
            })
            
        }
    
    })
    



  return (
    <div className="modal-wrapper" id='career'>
          <span className="personal-heading-container experience-heading"><img src={Badge} alt="" class="personal-image"/> <h1 class="personal-heading">CAREER HIGHLIGHTS</h1></span>
         <div className="modal-container">
       
       <div className="modal-text">
           <div className="modal-heading">
               <h3><small>1:</small>Product Development</h3>
           </div>
           <div className="modal-para">
           Led a dynamic team in crafting retail products meticulously approved by the Sharia Board and Ajman Bank, showcasing a commitment to ethical financial practices. Pioneered the development of the acclaimed Royal Card, garnering recognition from MasterCard for its outstanding design, further solidifying a reputation for innovation and excellence in the industry.
           </div>
    

   </div>
  
       <div className="modal-text">
           <div className="modal-heading">
               <h3><small>2: </small>Audit</h3>
           </div>
           <div className="modal-para">
           An integral member of the Group Audit team at Standard Chartered Bank, actively engaged in the execution of comprehensive international and local audits. Contributed expertise in ensuring adherence to rigorous audit standards, thereby reinforcing the bank's commitment to operational excellence and regulatory compliance.
           </div>
       </div>

       <div className="modal-text">
           <div className="modal-heading">
               <h3><small>3: </small>Due Diligence</h3>
           </div>
           <div className="modal-para">
           Assumed a leadership role at Standard Chartered Bank, Pakistan, overseeing the due diligence team. Spearheaded meticulous investigations and assessments, demonstrating a keen focus on risk management and strategic decision-making to ensure the bank's continued success in a dynamic financial landscape.           </div>
       </div>

       <div className="modal-text">
           <div className="modal-heading">
               <h3><small>4: </small>Merger</h3>
           </div>
           <div className="modal-para">
           Guided and directed team members in the seamless execution of system integration activities, fostering collaboration and efficiency. Demonstrated adept leadership in navigating complex technological landscapes, ensuring a cohesive and streamlined integration process that met the organization's objectives with precision.           </div>
       </div>

       <div className="modal-text">
           <div className="modal-heading">
               <h3><small>5: </small>System Integration</h3>
           </div>
           <div className="modal-para">
           In a role as a proficient leader, orchestrated and supervised the team in executing system integration activities. Employed strategic coordination and technical expertise to ensure a smooth and effective integration process, showcasing a commitment to optimizing organizational systems for enhanced functionality and performance.           </div>
       </div>

       <div className="modal-text">
           <div className="modal-heading">
               <h3><small>6: </small>System Selection</h3>
           </div>
           <div className="modal-para">
           Exercised leadership by spearheading a team in the acquisition of core systems and card systems for diverse organizations. Demonstrated strategic acumen in navigating procurement processes, ensuring seamless integration of cutting-edge technologies to meet the specific needs of each organization.           </div>
       </div>

   
</div>
    </div>
   
  )
}

export default Career