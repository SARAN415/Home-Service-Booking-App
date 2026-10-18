import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServTableOne from "./ServTableOne";
import { useLocation } from "react-router-dom"; 
import './../Style/home.css';
import './../Style/data-log-two.css';

function DataLogTwo(){
    const [services,setServices] = useState([]);
    const location=useLocation();
    const ServId= location.pathname.split("/")[2];

    useEffect(()=>{
        const fetchAllServices = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/servicesone/"+ServId);
                setServices(res.data);

            }catch(err){
                console.log(err);
            }
        }
        fetchAllServices();
    })

    // const [query_3,setQuery] = useState("");
    // const [query_2,setQuery_1] = useState("");
    
    // const search = (data) =>{
    //     return data.filter(
    //         (item)=>item.servname.toLowerCase().includes(query_3) || item.location.toLowerCase().includes(query_2));
    // }

    return(
        <main className="service-detail-page" id="main-content">
            <header className="service-detail-heading">
                <div>
                    <p className="eyebrow">Service member profile</p>
                    <h1>Meet your service professional</h1>
                    <p>Review their experience and service details before booking.</p>
                </div>
                <Link to="/servmem_show" className="service-detail-back">← Back to directory</Link>
            </header>
            <section className="service-detail-results" aria-label="Service member details">
                <ServTableOne data={services} />
            </section>
        </main>
    )
}
export default DataLogTwo;