import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom"; 
import logo from './../Images/logo.png';
import './../Style/home.css';

function Update(){
    const [user,setUser] = useState({
        name:"",
        emailid:"",
        dob:"",
        phno:"",
        experience:null,
        joiningdate:"",
        servname:"",
        location:"",

    })
    
    const navigate=useNavigate();
    const location=useLocation();
    const ServId= location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setUser((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick=async e=>{
        const servname=document.getElementById("servname").value;
        const username=document.getElementById("name").value;
        const useremailid=document.getElementById("emailid").value;
        const userphno=document.getElementById("phno").value;
        const houseno=document.getElementById("experience").value;
        const streetname=document.getElementById("dob").value;
        const areaname=document.getElementById("joiningdate").value;
        const location=document.getElementById("location").value;

        if(servname==="" || username==="" || useremailid==="" || userphno==="" || houseno==="" || streetname==="" || areaname==="" || location===""){
            alert("Every field should be filled");
        }
        else if(userphno.length!==10){
            alert("Phone number should contain 10 numbers")
        }else{
        e.preventDefault();
        try{
            axios.put("http://localhost:3001/update/"+ServId,user)
            
            navigate("/datalog_one");

        }catch(err){
            console.log(err);
        }
    }
    };

    return(
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                <div className="links-container">
                    <div className="link-item"><Link to="/userlog_det" className="link">USER DETAILS</Link></div>
                    <div className="link-item"><Link to="/datalog_one" className="link">SERVICE MEMBER DETAILS</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>
            
            <div className="formsnew-a">
                <h2 id="topic_log">UPDATE THE SERVICE MEMBER</h2>
                <div className="form-1">
                    <input className="input-adds" type="text" placeholder="service member name" onChange={handleChange} name="name" id="name"/>
                    <input className="input-adds" type="email" placeholder="service member emailid" onChange={handleChange} name="emailid" id="emailid"/>
                </div>
                
                <div className="form-2">
                    <input className="input-adds" type="tel" placeholder="service member phone number" onChange={handleChange} name="phno" id="phno"/>
                    <input className="input-adds" type="number" placeholder="service member experience" onChange={handleChange} name="experience" id="experience"/>
                </div>
                
                <div className="form-3">
                    <input className="input-adds" type="text" placeholder="service member service name" onChange={handleChange} name="servname" id="servname"/>
                    <input className="input-adds" type="text" placeholder="service member location" onChange={handleChange} name="location" id="location"/>
                </div>
                
                <div className="lab-inp">
                    <span id="input-label">Service member dob:<input className="input-date" type="date" onChange={handleChange} name="dob" id="dob"/></span>
                    <span id="input-labels">Service member joining date:<input className="input-date" type="date" onChange={handleChange} name="joiningdate" id="joiningdate"/></span>
                </div>
                <button id="ad_sub" onClick={handleClick}>Update</button>
            </div>

        </div>
        
    )
}
export default Update;