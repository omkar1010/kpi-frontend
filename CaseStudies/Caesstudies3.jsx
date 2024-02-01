import React from 'react'
import Staricon from "../../assets/Star icon.svg";
import sampleimg from "../../assets/case3firstimg.avif"
import Powerbiimg from "../../assets/sub-1.JPG";
import mainimg from "../../assets/case3secondimg.webp"
import "./Casestudies.css";

const Caesstudies3 = () => {
  return (
    <>
        <div className="container flex flex-col md:flex-row mb-3 md:mb-0 gap-6">
    <div className="introduction-container ml-3 ">
  <div className=" lg:w-[60vw] h-auto md:h-[200px]  md:w-[60vw]  ">
    <h1 style={{
  color: '#E09808',
  fontFamily: 'Poppins',
  fontSize: '27px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '33.6px',
  marginBottom:'16px' /* 140% */
}}>Introduction</h1>
 
<h3  style={{
  color: '#5C5C5C',
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '25.6px' /* 140% */
}} className="introduction-content">The objective of this industry is regulating the employment and conditions of service and to provide safety, health and welfare measures to the workers. This industry deals with matters concerning policy and legislation related to workers in the unorganized sector and administration of welfare funds for specified categories of workers through seventeen regions.
</h3>

  </div>
  <div className="lg:w-[60vw] h-auto md:w-[60vw] ">
  <h1 style={{
  color: '#E09808',
  fontFamily: 'Poppins',
  fontSize: '27px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '33.6px',
  marginBottom:'-5px' /* 140% */
}}>Challenges</h1>

<ul  style={{
  color: '#5C5C5C',
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '19.25.6px' ,/* 140% */
  
}} className="introduction-content p-4 custom-list"> <li className="mb-3">To maintain the overall satisfaction levels of employees with their work environment, benefits, and welfare programs and to track the level of employee engagement, involvement in their work and the organization.</li>
<li className="mb-3">Managing and administering a wide range of employee benefits, including healthcare, retirement plans, and other perks.
 </li>
<li className="mb-3">Manual reporting processes consumed valuable time and resources, limiting the client’s agility in responding to market dynamics and optimizing sales strategies.</li>
<li className="mb-3">Ensuring compliance with safety regulations and standards to maintain a safe work environment.</li>
<li className="mb-3">Understand which benefits are most and least utilized by employees.
</li>
<li className="mb-3">Analyze labour costs in relation to production or service output.</li>
<li className="mb-3">Analyze deviations between budgeted and actual labour costs.</li>


</ul>
  </div>

  
</div>


  <div className=" md:w-[35vw] ">
    {/* <div  >
 <img src={Powerbiimg} alt="" />
    </div> */}

    <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Industry:</h1>
    <h1 className="flex items-center justify-center mt-2 " style={{ color: '#FAFAFA', fontFamily: 'Poppins', fontSize: '12px', fontStyle: 'normal', fontWeight: '700', lineHeight: '19.6px', backgroundColor:'#E09808', width:'79px',height:'30px', borderRadius: '2px' }}>Healthcare</h1>
    <div  className="mt-3 md:h-[40vh]">
      <img style={{borderRadius:'4px'}} className="w-full h-full object-cover" src={sampleimg} alt="" />
    </div>
    <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Tech Stack:</h1>
    <div style={{ Border:'1px wolid black'}} className="techstack-conten">
 
 
  <h1 className="mt-2 inline-block text-center" style={{ 
    display: 'inline-block',
    color: '#FAFAFA',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30px', /* Set line-height equal to height for vertical centering */
    backgroundColor: '#E09808',
    width: '75px',
    height: '30px',
    borderRadius: '2px',
    marginRight:'12px',
    textAlign: 'center' /* Center horizontally */
  }}>Power BI
  </h1>
  <h1 className="mt-2 inline-block text-center" style={{ 
    display: 'inline-block',
    color: '#FAFAFA',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30px', /* Set line-height equal to height for vertical centering */
    backgroundColor: '#E09808',
    width: '50px',
    height: '30px',
    borderRadius: '2px',
    marginRight:'12px',
    textAlign: 'center' /* Center horizontally */
  }}>SSIS</h1>



</div>
<h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Data Source:</h1>
<div className="techstack-content">
  <h1 className="mt-2 inline-block text-center" style={{ 
    display: 'inline-block',
    color: '#FAFAFA',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30px', /* Set line-height equal to height for vertical centering */
    backgroundColor: '#E09808',
    width: '40px',
    height: '30px',
    borderRadius: '2px',
    marginRight:'12px',
    textAlign: 'center' /* Center horizontally */
  }}>SQL Server</h1>
  <h1 className="mt-2 inline-block text-center" style={{ 
    display: 'inline-block',
    color: '#FAFAFA',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30px', /* Set line-height equal to height for vertical centering */
    backgroundColor: '#E09808',
    width: '80px',
    height: '30px',
    borderRadius: '2px',
    textAlign: 'center', /* Center horizontally */
    marginRight:'12px',
  }}>Microsoft 365</h1>



</div>



  </div>
  
</div>

{/* <div className="container ">
 <img src={mainimg} alt="" />
      </div> */}
      <div className="container ">
          <img
          style={{borderRadius:'4px'}}
            className="w-full h-full object-cover"
            src={mainimg}
            alt=""
          />
        </div>


<div className="container mt-4">
<h1 style={{
  color: '#E09808',
  fontFamily: 'Poppins',
  fontSize: '27px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '33.6px',
  marginBottom:'6px' /* 140% */
}}>Solution</h1>

<ul  style={{
  color: '#5C5C5C',
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '19.6px' ,/* 140% */
  
}} className="introduction-content p-4 custom-list"> <li className="mb-4">The Business Intelligence (BI) team presented a proof of concept to the client Following successful testing, the solution was deployed to the remaining OUs.  
</li>
<li className="mb-3">The team provided Customized Dashboards and Reports to quickly grasp key insights for more effective decision-making and improved outcomes for workers. 
 </li>
<li className="mb-3">Provided reports to monitor safety training completion rates, track safety incident reports 
</li>
<li className="mb-3">Review staffing levels, wage structures, and work schedules to control labour costs while maintaining quality.
</li>
<li className="mb-3">Enhance cost forecasting models and adjust budgets based on insights.

</li>
</ul>
</div>
<div className="container">
<h1 style={{
  color: '#E09808',
  fontFamily: 'Poppins',
  fontSize: '27px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '33.6px',
  marginBottom:'6px' /* 140% */
}}>Result</h1>
<h3  style={{
  color: '#5C5C5C',
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '25.6px' /* 140% */
}} className="introduction-content">Sceniuz effectively improved our client's workforce productivity and helped them understand how hard work relates to getting the job done better. We brought together all the worker data and important performance measures into one place, making it easier for our client to learn from the information and make smart decisions about managing their workforce.

</h3>
  </div>   
    
    </>
  )
}

export default Caesstudies3