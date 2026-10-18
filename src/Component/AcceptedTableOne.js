import React from "react";
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import './../Style/service_one.css';


function AcceptedTableOne({data}){
    
   
    return(
        
                
                
                    <div className="serv" >
                        
                             {data.map(item=>(
                              <div className="user-inter" key={item.id}>
                                <div className="pers-info-1">
                                  <h1 id="userfull">{item.username}</h1>
                                </div>
                                 
                                
                                <div className="pers-info" >
                                  <div className="pers-one">
                                    <p><span id="top-tab">DATE:</span>{item.date}</p>
                                    <p><span id="top-tab">TIMING:</span>{item.timing}</p>
                                    <p><span id="top-tab">ID:</span>{item.id}</p>
                                    <p><span id="top-tab">USERID:</span>{item.userid}</p>
                                    <p><span id="top-tab">LOCATION:</span>{item.location}</p>
                                  </div>
                                
                                  {/* <div className="pers-two">
                                    
                                  </div> */}
                                  

                                </div>
                                
                                {/* <button className="book"><Link to="/datalog_book">Book</Link></button> */}
                        
                                
                              </div>
                              
                              
                              
                             ))}
                             {/* <div className="scr">
                                <button id="scroll">Next</button>
                             </div> */}
                             
                           
                           
                    </div>

                
            
    )
}
export default AcceptedTableOne;
