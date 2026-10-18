import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './../Style/home.css';
import logo from './../Images/logo.png';
import "./DataTwoServTable";

function Add(){
    
    const [idSign,setidSign]=useState("")
    const [nameSign,setnameSign]=useState("")
    const [mailidSign,setmailidSign]=useState("")
    const [dobSign,setdobSign]=useState("")
    const [phnoSign,setphnoSign]=useState("")
    const [servimgSign,setservImgSign]=useState("")
    const [servlogoSign,setservLogoSign]=useState("")
    const [expSign,setexpSign]=useState("")
    const [joindateSign,setjoindateSign]=useState("")
    const [servnameSign,setservnameSign]=useState("")
    const [locationSign,setlocationSign]=useState("")
    const [loginStatus,setLoginStatus]=useState("")
    // const [login1Status,setLogin1Status]=useState("")
    // const [login2Status,setLogin2Status]=useState("")

    const navigate=useNavigate();
    
    const handleClick=()=>{
        const id=document.getElementById("id").value;
        const servname=document.getElementById("servname").value;
        const username=document.getElementById("name").value;
        const useremailid=document.getElementById("emailid").value;
        const userphno=document.getElementById("phno").value;
        const houseno=document.getElementById("experience").value;
        const streetname=document.getElementById("dob").value;
        const areaname=document.getElementById("joiningdate").value;
        const location=document.getElementById("location").value;
        const servimg=document.getElementById("servimg-new").value;
        const servlogo=document.getElementById("servlogo-new").value;

        if(id==="" || servname==="" || username==="" || useremailid==="" || userphno==="" || houseno==="" || streetname==="" || areaname==="" || location==="" || servimg==="" || servlogo===""){
            setLoginStatus("Every field should be filled");
        }
        else if(userphno.length!==10){
            setLoginStatus("Phone number should contain 10 digits");
        }else{
            axios.post("http://localhost:3001/add",{
                id:idSign,
                name:nameSign,
                emailid:mailidSign,
                dob:dobSign,
                phno:phnoSign,
                experience:expSign,
                joiningdate:joindateSign,
                servname:servnameSign,
                location:locationSign,
                servimg:servimgSign,
                servlogo:servlogoSign
            }).then ((res)=>{
                if(res.data.Status==="Success"){
                    navigate("/datalog_four");
                }else{
                    setLoginStatus("The value of id was already exist so please change it");
                }
            });
        }
        
        
        
    };
    
    

    return(
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                <div className="links-container">
                    <div className="link-item" id="active"><Link to="/userlog_det" className="link">USER DETAILS</Link></div>
                    <div className="link-item"><Link to="/datalog_one" className="link">SERVICE MEMBER DETAILS</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>
            
            <div className="container_2">
                <div className="links-det">
                    <div className="link-items" id="active"><Link to="/datalog_one" className="links">PERSONAL DETAILS</Link></div>
                    <div className="link-items"><Link to="/datalog_four" className="links">UPDATED PERSONAL DETAILS</Link></div>
                    <div className="link-items"><Link to="/add" className="links">ADD SERVICE MEMBER DETAILS</Link></div>
                        
                </div>   
                {/* <h2 id="err">{login1Status}</h2> */}
                <div className="div-inputsnew">
                    <div className="formsnew-s">
                        <h2 id="topic_log">ADD NEW SERVICE MEMBER</h2>
                        <div className="form-1">
                            <input className="input-adds" type="text" placeholder="service member id" onChange={(e)=> {setidSign(e.target.value);}} name="id" id="id"/>
                            <input className="input-adds" type="text" placeholder="service member name" onChange={(e)=> {setnameSign(e.target.value);}} name="name" id="name"/>
                            <input className="input-adds" type="email" placeholder="service member emailid" onChange={(e)=> {setmailidSign(e.target.value);}} name="emailid" id="emailid"/>   
                        </div>
                        
                        <div className="form-2">
                            
                            <input className="input-adds" type="number" placeholder="service member experience" onChange={(e)=> {setexpSign(e.target.value);}} name="experience" id="experience"/>
                            <input className="input-adds" type="text" placeholder="service member service name" onChange={(e)=> {setservnameSign(e.target.value);}} name="servname" id="servname"/>
                            <input className="input-adds" type="text" placeholder="service member location" onChange={(e)=> {setlocationSign(e.target.value);}} name="location" id="location"/>
                        </div>
                        <div className="form-3">
                            <input className="input-adds" type="tel" placeholder="service member phone number" onChange={(e)=> {setphnoSign(e.target.value);}} name="phno" id="phno"/>
                            <input className="input-adds" type="tel" placeholder="service member logo link address" onChange={(e)=> {setservLogoSign(e.target.value);}} name="servlogo-new" id="servlogo-new"/>
                            <input className="input-adds" type="tel" placeholder="service member image link address" onChange={(e)=> {setservImgSign(e.target.value);}} name="servimg-new" id="servimg-new"/>
                        </div>
                        {/* <div className="form-4">
                            
                        </div> */}
                        
                        <div className="lab-inp">
                            <span id="input-label">Service member dob:<input className="input-date" type="date" placeholder="dob" onChange={(e)=> {setdobSign(e.target.value);}} name="dob" id="dob"/></span>
                            <span id="input-labels">Service member joining date:<input className="input-date" type="date" onChange={(e)=> {setjoindateSign(e.target.value);}} name="joiningdate" id="joiningdate"/></span>
                        </div>
                        
                        <button id="ad_sub" onClick={handleClick}>Add</button>
                    </div>
                    
                </div>
                
                
            </div>
            <h2 id="err">{loginStatus}</h2>
            {/* <h2 id="err">{login2Status}</h2> */}

        </div>
        
    )
}
export default Add;