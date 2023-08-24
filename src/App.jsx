import { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
// import Navbar1 from './Navbar1';
import TextForm from './TextForm';
// import Alert1 from './Alert1';
// import About from './DarkMode/About';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import { BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {

  const[alert,setAlert]=useState(null);
  const[mode,setMode]=useState('light');

  // const toggleMode=()=>{
  //   if(mode==='light')
  //   {
  //     setMode('dark');
  //     document.body.style.backgroundColor='#042743';
  //   }

  //   else
  //   {
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //   }

  // }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')

    document.body.classList.remove('bg-danger')

    document.body.classList.remove('bg-success')

    document.body.classList.remove('bg-primary')


  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setMode('dark');
          document.body.style.backgroundColor='#042743';
    }

    if(mode==='dark')
    {
      setMode('light');
          document.body.style.backgroundColor='white';
    }
  }



  const showAlert=(message,type)=>{
   
   setAlert( {
         msg:message,
          type:type
    }
   )

    setTimeout(()=> {
        setAlert(null);
      },1500); 
    }

  return (
    <>
     {/* <BrowserRouter> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
     {/* <React.Fragment> */}
     {/* <Routes> */}
     {/* <Route exact path="/Navbar" element={<Navbar title="TextUtils" aboutText="About"/>}>
         
         </Route> */}

{/*          
         <Route exact path="/Alert" element={<Alert alert={alert}/>}>
         
         </Route>
 

         <Route exact path="/Alert" element={<Alert alert={alert}/>}>
         
         </Route> */}
 
  
   {/* <div className='container my-3'> */}

 
          {/* <Route exact path="/about" element={<About  mode={mode} toggleMode={toggleMode}/>} >
         
          </Route> */}
         
          {/* <Route exact path="/" element= */}
          <TextForm   showAlert={showAlert} heading="Try Textutils-Word Counter,Character Counter,Remove extra space " mode={mode}/>
          {/* </Route> */}
     


 
    {/* </Routes> */}
    </div>
    {/* </React.Fragment> */}
    {/* </BrowserRouter> */}
   </>
  );
}

export default App;
