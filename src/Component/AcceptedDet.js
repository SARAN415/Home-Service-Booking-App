import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import AcceptedTableOne from "./AcceptedTableOne";
import { useLocation } from "react-router-dom"; 
import './../Style/home.css';

function AcceptedDet(){
    const [services,setServices] = useState([]);
    const location=useLocation();
    const ServId= location.pathname.split("/")[2];

    useEffect(()=>{
        const fetchAllServices = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/acceptedone/"+ServId);
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
            (item)=>item.username.toLowerCase().includes(query_3) && item.location.toLowerCase().includes(query_2));
    }

    return(
        <div className="container">

            <div className="container_1">
                {/* <div className="links-det">
                    <div className="link-items" id="active"><Link to="/datalog_two" className="links">BOOKING SERVICE MEMBERS</Link></div>
                    <div className="link-items"><Link to="/datalog_three" className="links">BOOKING DETAILS</Link></div>
                    <div className="link-items"><Link to="/datalog_book" className="links">BOOKING SCHEDULE</Link></div>
                    
                </div> */}
                <div className="div-inp">
                    <h1 id="acc-info">Accepted Schedule Details</h1>
                    <div className="inp-s">
                        <input className="search-items" placeholder="Search user name" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                        <input className="search-items" placeholder="Search location" onChange={(e) => setQuery_1(e.target.value.toLowerCase())}/>
                        

                    </div>
                    <div className="tabletwo">
                        {<AcceptedTableOne data={search(services)}/>}

                    </div>

                    

                    

                </div>
                
            </div>

        </div>
        
   

        
    )
}
export default AcceptedDet;