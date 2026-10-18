import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './../Style/table.css';
import './../Style/home.css';
import DataTwoServTable from "./DataTwoServTable";
import logo from './../Images/logo.png';

function DataOneService(){
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
    const [query_2,setQuery_2] = useState("");
    const search = (data) =>{
        return data.filter((item)=>item.servname.toLowerCase().includes(query) && item.location.toLowerCase().includes(query_1) && item.name.toLowerCase().includes(query_2));
    }
    

    return(
        
        
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                 <div className="links-container">
                    <div className="link-item"><Link to="/dataone_home" className="link">HOME</Link></div>
                    {/* <div className="link-item" id="active"><Link to="/service_det" className="link">SERVICE MEMBER DETAILS</Link></div> */}
                    <div className="link-item"><Link to="/servmem_log" className="link">LOGOUT</Link></div>
                </div>
            </div>   
                
            <div className="container_1">
                <div className="links-det">
                    <div className="link-items" id="active"><Link to="/service_det" className="links">PERSONAL DETAILS</Link></div>
                    <div className="link-items"><Link to="/databook_one" className="links">BOOKED DETAILS</Link></div>
                </div>
                    <div className="div-inp">
                        <div className="inputs">
                        <input className="search-items" placeholder="Search name" onChange={(e) => setQuery_2(e.target.value.toLowerCase())}/>
                            <input className="search-items" placeholder="Search service name" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                            <input className="search-items" placeholder="Search location" onChange={(e) => setQuery_1(e.target.value.toLowerCase())}/>
                        </div>
                        
                        <div className="tableone">
                            {<DataTwoServTable data={search(services)}/>}
                        </div>
                        
                    </div>
                    
            </div>
            
            
        </div>
        
    )
}
export default DataOneService;