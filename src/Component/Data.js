import React from "react";
import './../Style/home.css';
import {HashLink as Link} from 'react-router-hash-link';

function Data(){
    return(
        <div className="container">
            <div className="navbar bg">
                <div className="links-container">
                    <div className="link-item"><Link to="/userlog_det" className="link">USER DETAILS</Link></div>
                    <div className="link-item"><Link to="/data_one" className="link">SERVICE MEMBER DETAILS</Link></div>
                    <div className="link-item"><Link to="" className="link">CHAT</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>   
            
        </div>
        
    )
}
export default Data;