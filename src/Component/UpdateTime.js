import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom"; 
import logo from './../Images/logo.png';
//import './../Style/Stylehome.css';

function UpdateTime(){
    const [user,setUser] = useState({
        timing:"",

    })
    
    const navigate=useNavigate();
    const location=useLocation();
    const ServId= location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setUser((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick=async e=>{
        e.preventDefault();
        try{
            axios.put("http://localhost:3001/update_accept/"+ServId,user)
            
            navigate("/accept_table");

        }catch(err){
            console.log(err);
        }
    };

    return(
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                <div className="links-container">
                    <div className="link-item"><Link to="/dataone_home" className="link">HOME</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>
            
            <div className="formsnew">
                <h2 id="topic_log">UPDATE THE SERVICE TIMING</h2>
                <div className="form-1">
                    <input className="input-adds" type="text" placeholder="service timing" onChange={handleChange} name="timing"/>
                </div>
                
                <button id="ad_sub" onClick={handleClick}>Update</button>
            </div>

        </div>
        
    )
}
export default UpdateTime;