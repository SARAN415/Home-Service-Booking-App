import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './../Style/home.css';
import DataOneServTable from "./DataOneServTable";
import logo from './../Images/logo.png';

function DataLogOne(){
    const [services,setServices] = useState([]);

    useEffect(()=>{
        const fetchAllServices = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/service_det");
                setServices(res.data);

            }catch(err){
                console.log(err);
            }
        }
        fetchAllServices();
    })

    const [query,setQuery] = useState("");
    const [query_1,setQuery_1] = useState("");
    const search = (data) =>{
        return data.filter((item)=>item.servname.toLowerCase().includes(query) && item.location.toLowerCase().includes(query_1));
    }
    

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
                
            
            <div className="container_1">
                <div className="links-det">
                    <div className="link-items" id="active"><Link to="/datalog_one" className="links">PERSONAL DETAILS</Link></div>
                    <div className="link-items"><Link to="/datalog_four" className="links">UPDATED PERSONAL DETAILS</Link></div>
                    <div className="link-items"><Link to="/add" className="links">ADD SERVICE MEMBER DETAILS</Link></div>
                    
                </div>
                <div className="div-inp">
                    <div className="inputs">
                        <input className="search-items" placeholder="Search service name" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                        <input className="search-items" placeholder="Search location" onChange={(e) => setQuery_1(e.target.value.toLowerCase())}/>
                    </div>
                    <div className="tableone">
                        {<DataOneServTable data={search(services)}/>}
                        
                    </div>
                    
                </div>
                

            </div>
            
        </div>
        
    )
}
export default DataLogOne;