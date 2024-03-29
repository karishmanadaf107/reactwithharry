
import React from 'react';
// import { Link } from 'react-router-dom';
// import About from './DarkMode/About';

export default function Navbar(props){

  return (
    <div>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <div className='d-flex'>

          <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
          <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>

          <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>

          <div className='bg-light rounded mx-2' onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>

          <div className='bg-dark rounded mx-2' onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>

          <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>

        </div>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      {/*switch*/}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">toggle mode</label>
</div>

      {/*switch*/}
    </div>
  </div>
</nav>
</div>
  )
}
