import React from 'react'
import Staricon from "../../assets/Star icon.svg";
import sampleimg from "../../assets/case2firstimg.avif"
import Powerbiimg from "../../assets/sub-1.JPG";
import mainimg from "../../assets/caes-2secondimg2.svg"
import "./Casestudies.css";


const CaseStudies2 = () => {
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
}} className="introduction-content">The Healthcare company is a market leader and offers a wide basket of more than two hundred and fifty products. They participate in both the prescription and over-the-counter categories in a broad range of therapeutic groups, including anti-malarials, antibiotics, anti-inflammatory and nutrition. Their range includes both generic and branded generic products
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
  
}} className="introduction-content p-4 custom-list"> <li className="mb-3">Before implementing the solution, the client faced several challenges. These included data fragmentation across different platforms, lack of real-time insights, manual reporting processes, and difficulty in tracking sales performance and KPIs across regions.</li>
<li className="mb-3">These challenges hindered the client’s ability to make informed decisions and effectively manage sales operations. The absence of a unified platform for sales performance and health KPI assessment resulted in fragmented data and limited visibility into the correlation between effort to sales.  </li>
<li className="mb-3">Manual reporting processes consumed valuable time and resources, limiting the client’s agility in responding to market dynamics and optimizing sales strategies.</li>
<li className="mb-3">Manual reporting processes consumed valuable time and resources, limiting the client’s agility in responding to market dynamics and optimizing sales strategies.</li>
<li className="mb-3">Analyzing market data, payer information, and pricing strategies to optimize market access and pricing decisions.
</li>
<li className="mb-3">Managing pharmaceutical supply chains, including raw materials, manufacturing, and distribution.</li>

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
      <div className="container w-full">
          <img
          style={{borderRadius:'4px'}}
            className="w-full object-cover"
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
  
}} className="introduction-content p-4 custom-list"> <li className="mb-4">The Business Intelligence (BI) team presented a proof of concept to the client, initially testing it on two operating units (OUs). Following successful testing, the solution was deployed to the remaining OUs.  
</li>
<li className="mb-3">The key Business Intelligence objects implemented in the different domains such as Sales & Representatives Analysis, Performance Analysis and Accounts Receivables. </li>
<li className="mb-3">The team provided visualization which helped the client to make better decisions</li>
<li className="mb-3">Monitor supply chain efficiency through KPIs such as inventory turnover rates, production cycle times, and distribution lead times.</li>
<li className="mb-3">Implement market access KPIs to measure market share, pricing elasticity, and payer satisfaction.
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
}} className="introduction-content">Sceniuz successfully provided the client with a comprehensive solution to optimize sales performance and assess the correlation of effort to sales for their sales representatives. By integrating sales data and health key performance indicators (KPIs) into a single platform, Sceniuz enabled the client to gain valuable insights and make data-driven decisions.
</h3>
  </div>   
    
    </>
  )
}

export default CaseStudies2