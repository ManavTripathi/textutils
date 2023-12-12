import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.tittle}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" to="/">{props.hometext}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/about">{props.abouttext}</Link>
          </li>
          
        
        </ul>
     
     {/*  */}
     <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleblue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='primary'?'Light Mode':'Blue Mode'}</label>
    </div>
     {/*  */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.modetext}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={tittle: PropTypes.string, abouttext:  PropTypes.string.isRequired, hometext: PropTypes.string}
// prop type string hogi qki set kr diye ,chnage bhi kr skte h jese object ,array ,number
Navbar.defaultProps={
    tittle:'kuch bhi likhdo',
    abouttext:'About',
    hometext:'yaha bhi'
}
