import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import ServTable from "./ServTable";
import './table.css';

function Service(){
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

    const [query,setQuery] = useState("");
    const [query_1,setQuery_1] = useState("");
    const search = (data) =>{
        return data.filter((item)=>item.servname.toLowerCase().includes(query) && item.location.toLowerCase().includes(query_1));
    }
    

    return(
        
        <div className="contain">
            <input className="search" placeholder="Search service name" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
            <input className="search" placeholder="Search location" onChange={(e) => setQuery_1(e.target.value.toLowerCase())}/>
            
            {<ServTable data={search(services)}/>}
        </div>
        
    )
}
export default Service;