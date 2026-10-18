import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SubmitTable from "./SubmitTable";
import logo from './../Images/logo.png';
import './../Style/home.css';

function DataLogThree(){
    const [services_1,setServices_1] = useState([]);
    
    useEffect(()=>{
        const fetchAllServices_1 = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/serviced");
                setServices_1(res.data);

            }catch(err){
                console.log(err);
            }
        }
        fetchAllServices_1()
    });

    const [query,setQuery_3] = useState("");
    const [query_1,setQuery_2] = useState("");
    const searched = (data) =>{
        return data.filter(
            (item)=>item.username.toLowerCase().includes(query) && item.userphno.includes(query_1));
    }

    return(
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                <div className="links-container">
                    <Link to="/home" className="link"><div className="link-item">HOME</div></Link>
                    <div className="link-item" id="active"><Link to="/datalog_two" className="link">BOOKING</Link></div>
                    <div className="link-item"><Link to="/chat_home" className="link">CHAT</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>

            <div className="container_1">
                <div className="links-det">
                    <div className="link-items" id="active"><Link to="/datalog_two" className="links">BOOKING SERVICE MEMBERS</Link></div>
                    <div className="link-items"><Link to="/datalog_three" className="links">BOOKING DETAILS</Link></div>
                    <div className="link-items"><Link to="/datalog_book" className="links">BOOKING SCHEDULE</Link></div>
                    
                </div>
                <div className="div-inp">
                    <div className="inp">
                        <input className="search-items" placeholder="Search username" onChange={(e) => setQuery_3(e.target.value.toLowerCase())}/>
                        <input className="search-items" placeholder="Search phone number" onChange={(e) => setQuery_2(e.target.value)}/>
                        

                    </div>
                    <div className="tabl">
                        {<SubmitTable data={searched(services_1)}/>}

                    </div>

                    

                </div>
                
            </div>

        </div>
        
   

        
    )
}
export default DataLogThree;