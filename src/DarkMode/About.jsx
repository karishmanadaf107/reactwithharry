import React from "react";
// import { useState } from "react";


 const About=(props)=>{

    // const [mystyle,setmystyle]=useState(
    //     {
    //         color:'white',
    //         backgroundColor:'black'
    //     }
    // )

    // const  [btntext,setbtntext]=useState("enable light mode");
    
    // const togglestyle=()=>{
    //     if(mystyle.color==='white')
    //     {
    //         setmystyle(
    //             {
    //                color:'black',
    //                backgroundColor:'white',
    //                border:'1px solid white' 
    //             }
    //         )
    //         setbtntext("enable dark mode")
    //     }
    //     else{
    //         setmystyle(
    //             {
    //                color:'white',
    //                backgroundColor:'black',
    //                border:'1px solid white' 
    //             }
    //         )
    //         setbtntext("enable light mode")
    //     }
    // }

    let mystyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'? 'rgb (36,74, 104)':'white'
    }

    return(
        <div classNameName="container" style={{backgroundColor:props.mode==='dark'?'rgb(36,74, 104)':'white'
      }}>
            
            <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed " style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse"   data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
       
        
        </div>
        
        
       
    )
}
export default About;