import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import {HashLink as Link} from 'react-router-hash-link';
import SubmitTable from "./SubmitTable";
import ServTableOne from "./ServTableOne";
import './../Style/service_one.css';

function ServiceTwo(){
    const [services,setServices] = useState([]);

    useEffect(()=>{
        const fetchAllServices = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/services");
                setServices(res.data);

            }catch(err){
                console.log(err);
            }
        }
        fetchAllServices();
    })

    const [query_3,setQuery] = useState("");
    const [query_2,setQuery_1] = useState("");
    
    const search = (data) =>{
        return data.filter(
            (item)=>item.servname.toLowerCase().includes(query_3) && item.location.toLowerCase().includes(query_2));
    }
    
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
        
        <div className="common">
            <div className="search">
                <div className="search_serv">
                    <h1 id="searchserv">Search service member</h1>
                    <div className="one">
                        
                        <input className="search_items" placeholder="Search service name" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                        <input className="search_items" placeholder="Search location" onChange={(e) => setQuery_1(e.target.value.toLowerCase())}/>
                        
                        
                    </div>
                    <Link to="#details" smooth><p id="det">Search</p></Link>
                </div>
                
                
            </div>
            <div className="details" id="details">
                <div className="two">
                    {<ServTableOne data={search(services)}/>}
                </div>
                
                <p id="detone"><Link to="#search_one" smooth>Next</Link></p>
            </div>
            <div className="search_one" id="search_one">
                <div className="searchuser">
                    <h1 id="searchus">Search Booking Details</h1>
                    <div className="three">
                        <input className="search_user" placeholder="Search username" onChange={(e) => setQuery_3(e.target.value.toLowerCase())}/>
                        <input className="search_user" placeholder="Search phone number" onChange={(e) => setQuery_2(e.target.value)}/>
                    </div>
                    
                    <p id="sea"><Link to="#details_one" smooth>Submit</Link></p>
                </div>
                

            </div>
            <div className="details_one" id="details_one">
                <div className="four">
                    {<SubmitTable data={searched(services_1)}/>}
                </div>
                

                <p id="detsea"><Link to="/chat_home" smooth>Next</Link></p>
            </div>
            

            
        </div>
        
    )
}
export default ServiceTwo;