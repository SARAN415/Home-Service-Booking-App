import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ChatShow from "./ChatShow";
import logo from './../Images/logo.png';
import './../Style/home.css';

function ChatTable(){
    const [services_1,setServices_1] = useState([]);
    
    useEffect(()=>{
        const fetchAllServices_1 = async () =>{
            try{
                const res = await axios.get("http://localhost:3001/chat_table");
                setServices_1(res.data);

            }catch(err){
                console.log(err);
            }
        }
        fetchAllServices_1()
    });

    return(
        <div className="container">
            <div className="navbar bg">
                <img src={logo} alt="logo" id="logo"/>
                <div className="links-container">
                    <div className="link-item"><Link to="/dataone_home" className="link">HOME</Link></div>
                    <div className="link-item"><Link to="/admin_log" className="link">LOGOUT</Link></div>
                </div>
                
            </div>

            <div className="container_1">
                <h2 id="chat-tab">CHAT DETAILS</h2>
                <div className="div-inp">
                    
                    <div className="tableone">
                        {<ChatShow data={services_1}/>}

                    </div>

                    

                </div>
                
            </div>

        </div>
        
   

        
    )
}
export default ChatTable;