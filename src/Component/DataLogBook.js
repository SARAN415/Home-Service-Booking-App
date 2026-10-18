import React from "react";
import {useState} from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import './../Style/home.css';
import {useNavigate} from 'react-router-dom';

function DataLogBook(){
    const [idSign,setidSign]=useState("")
    const [useridSign,setuseridSign]=useState("")
    const [usernameSign,setusernameSign]=useState("")
    const [useremailSign,setuseremailSign]=useState("")
    const [userphnoSign,setuserphnoSign]=useState("")
    const [housenoSign,sethousenoSign]=useState("")
    const [streetSign,setstreetSign]=useState("")
    const [areanameSign,setareanameSign]=useState("")
    const [locationSign,setlocationSign]=useState("")
    const [dateSign,setdateSign]=useState("")
    const [areaSign,setareaSign]=useState("")
    const [loginStatus,setLoginStatus]=useState("")

    const navigate=useNavigate();
    
    const handleClick=()=>{
        const id=document.getElementById("id").value;
        const servname=document.getElementById("servname").value;
        const username=document.getElementById("username").value;
        const useremailid=document.getElementById("useremailid").value;
        const userphno=document.getElementById("userphno").value;
        const houseno=document.getElementById("houseno").value;
        const streetname=document.getElementById("streetname").value;
        const areaname=document.getElementById("areaname").value;
        const location=document.getElementById("location").value;
        const descr=document.getElementById("descr").value;
        const date=document.getElementById("date").value;

        

        if(id==="" || servname==="" || username==="" || useremailid==="" || userphno==="" || houseno==="" || streetname==="" || areaname==="" || location==="" || date==="" || descr===""){
            setLoginStatus("Every field should be filled");
        }
        else if(userphno.length!==10){
            setLoginStatus("Phone number should contain 10 digits");
        }else{
            
        axios.post("http://localhost:3001/addsch",{
            id:idSign,
            userid:useridSign,
            username:usernameSign,
            useremailid:useremailSign,
            userphno:userphnoSign,
            houseno:housenoSign,
            streetname:streetSign,
            areaname:areanameSign,
            location:locationSign,
            date:dateSign,
            descr:areaSign,
            
        }).then ((res)=>{
            if(res.data.Status==="Success"){
                navigate("/success_msg");
            }else{
                setLoginStatus("The value of id was already exist today so please change it");
            }
        });
        
      }
      

    };
    

    return(
        <div className="container">
            

            <div className="container_1">
                {/* <div className="links-det">
                    <div className="link-items" id="active"><Link to="/datalog_two" className="links">BOOKING SERVICE MEMBERS</Link></div>
                    <div className="link-items"><Link to="/datalog_three" className="links">BOOKING DETAILS</Link></div>
                    <div className="link-items"><Link to="/datalog_book" className="links">BOOKING SCHEDULE</Link></div>
                    
                </div> */}
                <div className="div-inputsnew">
                    <div className="formsn">
                        <h1 id="topic_log">BOOKING SCHEDULE</h1>
                        
                        <div className="user-pers">
                            <input className="input-addss" type="text" placeholder="service member id" onChange={(e)=> {setidSign(e.target.value);}} name="id" id="id"/>
                            <input className="input-addss" type="text" placeholder="user id" onChange={(e)=> {setuseridSign(e.target.value);}} name="servname" id="servname"/>
                            <input className="input-addss" type="text" placeholder="user name" onChange={(e)=> {setusernameSign(e.target.value);}} name="username" id="username"/>
                            
                        </div>
                
                {/* <input type="text" placeholder="user location" onChange={handleChange} name="useraddress"/> */}
                
                
                        <div className="form-1">
                            <input className="input-addss" type="email" placeholder="user emailid" onChange={(e)=> {setuseremailSign(e.target.value);}} name="useremailid" id="useremailid"/>
                            <input className="input-addss" type="tel" placeholder="user phone number" onChange={(e)=> {setuserphnoSign(e.target.value);}} name="userphno" id="userphno"/>
                            <input className="input-addss" type="text" placeholder="user house no" onChange={(e)=> {sethousenoSign(e.target.value);}} name="houseno" id="houseno"/>
                            
                        </div>
                        <div className="form-3">
                            <input className="input-addss" type="text" placeholder="user street name" onChange={(e)=> {setstreetSign(e.target.value);}} name="streetname" id="streetname"/>
                            <input className="input-addss" type="text" placeholder="user area name" onChange={(e)=> {setareanameSign(e.target.value);}} name="areaname" id="areaname"/>
                            <input className="input-addss" type="text" placeholder="user district name" onChange={(e)=> {setlocationSign(e.target.value);}} name="location" id="location"/>
                           
                        </div>
                        Date:<input className="input-areas" type="date" id="date" onChange={(e)=> {setdateSign(e.target.value);}} name="date"/> 
                        <textarea className="input-area" rows="10" cols="60" placeholder="problem statement" onChange={(e)=> {setareaSign(e.target.value);}} name="descr" id="descr"></textarea> 
                        
                        
                        <button id="ad_sub" onClick={handleClick}>Add</button>
                    </div>
                    
                </div>
                <h2 id="err">{loginStatus}</h2>
                
            </div>

        </div>
        
   

        
    )
}
export default DataLogBook;