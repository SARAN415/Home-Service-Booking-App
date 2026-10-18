import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DataScheduleTable from "./DataScheduleTable";
import logo from './../Images/logo.png';
import './../Style/home.css';

function DataBook(){
    const [services_1,setServices_1] = useState([]);
    
    useEffect(()=>{
        const fetchAllServices_1 = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/data_book");
                setServices_1(res.data);

            }catch(err){
                console.log(err);
            }
        }
        fetchAllServices_1()
    });

    const [query,setQuery] = useState("");
    const [query_1,setQuery_1] = useState("");
    const [query_2,setQuery_2] = useState("");
    const search = (data) =>{
        return data.filter(
            (item)=>item.username.toLowerCase().includes(query) && item.userphno.includes(query_1) && item.location.toLowerCase().includes(query_2));
    }

    return(
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                <div className="links-container">
                    <div className="link-item"><Link to="/data" className="link">USER DETAILS</Link></div>
                    <div className="link-item"><Link to="/datalog_one" className="link">SERVICE MEMBER DETAILS</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>

            <div className="container_1">
                <div className="links-det">
                    <div className="link-items"><Link to="/userlog_det" className="links">LOGIN DETAILS</Link></div>
                    <div className="link-items"><Link to="/userbook_det" className="links">BOOKING DETAILS</Link></div>
                    
                </div>
                <div className="div-inp">
                    <div className="inputs">
                        <input className="search-items" placeholder="Search username" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                        <input className="search-items" placeholder="Search location" onChange={(e) => setQuery_2(e.target.value.toLowerCase())}/>
                        <input className="search-items" placeholder="Search phone number" onChange={(e) => setQuery_1(e.target.value)}/>
                        

                    </div>
                    
                    <div className="tableone">
                        {<DataScheduleTable data={search(services_1)}/>}
                    </div>
                    

                </div>
                
            </div>

        </div>
        
   

        
    )
}
export default DataBook;