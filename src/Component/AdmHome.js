import React from "react";
import './home.css';
import {HashLink as Link} from 'react-router-hash-link';
import logo from './Images/logo.png';

function AdmHome(){
    return(
        <div className="container">
            <div className="navbar bg">
                
                <img src={logo} alt="logo" id="logo"/>
                    
                <div className="links-container">
                    
                    <Link to="#home" smooth className="link" id="active"><div className="link-item" id="left-img">HOME</div></Link>
                    <Link to="/data" smooth className="link"><div className="link-item">USER DETAILS</div></Link>
                    <div className="link-item"><Link to="/data_one" className="link">SERVICE MEMBER DETAILS</Link></div>
                    <div className="link-item"><Link to="chat_home" className="link">CHAT</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
            </div>

            <br />
            <br />

            <header className="header-section" id="home">
                <h1 className="header-heading"><span>Welcome To Our Admin Site</span></h1>
            </header>

        </div>
        
        
   

        
    )
}
export default AdmHome;