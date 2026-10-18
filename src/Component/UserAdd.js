// import React from "react";
// import {useState} from 'react';
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import logo from './Images/logo.png';
// import './home.css';

// import { useNavigate,useLocation } from "react-router-dom"; 

// function UserAdd(){
    
//     const [users,setUsers] = useState({
//         userid:"",
//         username:"",
//         useremailid:"",
//         userphno:"",
//         useraddress:"",
//         houseno:"",
//         streetname:"",
//         areaname:"",
//         location:"",
//         date:"",
//         descr:"",

//     })

//     const navigate=useNavigate();
//     const location=useLocation();
//     const ServId= location.pathname.split("/")[2];

//     const handleChange = (e) =>{
//         setUsers((prev)=>({...prev,[e.target.name]:e.target.value}));
//     }
    
//     const handleClick=async e=>{
//         e.preventDefault();
//         try{
//             axios.put("http://localhost:3001/selected/"+ServId,users);
//             navigate("/datalog_two")

//         }catch(err){
//             console.log(err);
//         }
        

//     };

//     return(
//         <div className="container">
//             <div className="navbar bg">
//                 <img src={logo} alt="logo" id="logo"/>
//                 <div className="links-container">
//                     <Link to="/home" className="link"><div className="link-item">HOME</div></Link>
//                     <div className="link-item"><Link to="/datalog_two" className="link">BOOKING</Link></div>
                    
//                     <div className="link-item"><Link to="/chat_home" className="link">CHAT</Link></div>
//                     <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
//                 </div>
                
//             </div>
//             <div className="links-det">
//                     <div className="link-items"><Link to="/datalog_two" className="links">BOOKING SERVICE MEMBERS</Link></div>
//                     <div className="link-items"><Link to="/datalog_three" className="links">BOOKING DETAILS</Link></div>
//                     <div className="link-items"><Link to="/datalog_book" className="links">BOOKING SCHEDULE</Link></div>
                    
//             </div>
//             <div className="forms">
//                 <h2>ADD USER BOOKING DETAILS</h2>
//                 <div className="user-pers">
//                     <input className="input-addss" type="text" placeholder="user id" onChange={handleChange} name="userid"/>
//                     <input className="input-addss" type="text" placeholder="user id" onChange={handleChange} name="userid"/>
//                     <input className="input-addss" type="text" placeholder="user name" onChange={handleChange} name="username"/>
//                     <input className="input-addss" type="email" placeholder="user emailid" onChange={handleChange} name="useremailid"/>
//                     <input className="input" type="tel" placeholder="user phone number" onChange={handleChange} name="userphno"/>
//                 </div>
                
//                 {/* <input type="text" placeholder="user location" onChange={handleChange} name="useraddress"/> */}
                
//                 <div className="form-1">
//                             <input className="input-addss" type="text" placeholder="service member id" onChange={(e)=> {setidSign(e.target.value);}} name="id"/>
//                             <input className="input-addss" type="text" placeholder="user id" onChange={(e)=> {setuseridSign(e.target.value);}} name="servname"/>
//                             <input className="input" type="text" placeholder="user house no" onChange={(e)=> {sethousenoSign(e.target.value);}} name="houseno"/>
//                         </div>
//                         <div className="form-2">
//                             <input className="input-addss" type="text" placeholder="user street name" onChange={(e)=> {setstreetSign(e.target.value);}} name="streetname"/>
//                             <input className="input-addss" type="text" placeholder="user area name" onChange={(e)=> {setareanameSign(e.target.value);}} name="areaname"/>
//                             <input className="input" type="text" placeholder="user district name" onChange={(e)=> {setlocationSign(e.target.value);}} name="location"/>
//                         </div>
//                         <div className="areas">
//                             Date:<input className="input-areas" type="date" id="date" onChange={(e)=> {setdateSign(e.target.value);}} name="date"/> 
//                         </div>
                        
//                         <textarea className="input-area" rows="10" cols="60" placeholder="problem statement" onChange={(e)=> {setareaSign(e.target.value);}} name="descr"></textarea> 
//                 <button id="ad_sub" onClick={handleClick}>Add</button>
//             </div>

//         </div>
        
//     )
// }
// export default UserAdd;