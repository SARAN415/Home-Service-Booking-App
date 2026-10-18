import React from "react";
import { Link } from "react-router-dom";

function DataOne(){
    
    return(
        <div className="container">
            <div className="navbar bg">
                <div className="links-container">
                    <div className="link-item"><Link to="/dataone_home" className="link">HOME</Link></div>
                    <div className="link-item"><Link to="/service_det" className="link">SERVICE MEMBER DETAILS</Link></div>
                    <div className="link-item"><Link to="/chat_home" className="link">CHAT</Link></div>
                    <div className="link-item"><Link to="/servmem_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>   
            
        </div>
        
    )
}
export default DataOne;