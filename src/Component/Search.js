// import React from "react";
// import {useState} from 'react';
// import axios from 'axios';
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import ServTableOne from "./ServTableOne";
// // import logo from './Images/logo.png';
// import './home.css';

// function Search(){
//     const [services,setServices] = useState([]);

//     useEffect(()=>{
//         const fetchAllServices = async () =>{
//             try{
//                 const res = await axios.get("http://localhost:3001/services");
//                 setServices(res.data);

//             }catch(err){
//                 console.log(err);
//             }
//         }
//         fetchAllServices();
//     })

//     const [query_3,setQuery] = useState("");
    
//     const search = (data) =>{
//         return data.filter(
//             (item)=>item.servname.toLowerCase().includes(query_3));
//     }

//     return(
//         <div className="container">
//             {/* <div className="navbar bg">
//                 <img src={logo} alt="logo" id="logo"/>
//                 <div className="links-container">
//                     <Link to="/home" className="link"><div className="link-item">HOME</div></Link>
//                     <div className="link-item"><Link to="/datalog_two" className="link">BOOKING</Link></div>
                    
//                     <div className="link-item"><Link to="/chat_home" className="link">CHAT</Link></div>
//                     <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
//                 </div>
                
//             </div> */}

//             <div className="container_1">
                
//                 <div className="div-inp">
//                     <div className="inp">
//                         <input className="search-items" placeholder="Search service name" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
//                         <Link to="/datalog_two"><button onClick={<ServTableOne search(services)/>}>Submit</button></Link>
                        
//                     </div>
                    

//                 </div>
                
//             </div>

//         </div>
        
   

        
//     )
// }
// export default Search;