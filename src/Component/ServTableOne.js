import React from "react";
// import axios from 'axios';
import {Link} from 'react-router-dom';
import './../Style/service_one.css';


function ServTableOne({data}){
    
   
    return(
        
                
                
                    <div className="service-new" >
                        
                             <div className="content">
                                {data.map(item=>(
                                  <div className="user-one-13" key={item.id}>
                                    <div className="pers-info-10">
                                      {/* <img id="memb" src={item.servimg.replace(/[`'=]/g, '').replace(/[  ]/g,'+')} alt=""/> */}
                                      {/* <p><span id="top-tab"><img src={item.servlogo} alt="" width="100" height="100"/></span></p> */}
                                      <img id="mem-new" src={item.servimg} alt=""/>
                                      
                                    </div>
                                    
                                    
                                    <div className="pers-info-11">
                                      <div className="pers-one-12">
                                        <img id="mems" src={item.servlogo} alt="" width="200" height="100"/>
                                        <h1 id="userfull">{item.servname}</h1>
                                        <p><span id="top-tab">ID:</span>{item.id}</p>
                                        
                                        <p><span id="top-tab">EMAILID:</span>{item.emailid}</p>
                                        <p><span id="top-tab">DATE OF BIRTH:</span>{item.dob}</p>
                                        <p><span id="top-tab">PHNONE NUMBER:</span>{item.phno}</p>
                                        <p><span id="top-tab">EXPERIENCE:</span>{item.experience}</p>
                                        <p><span id="top-tab">WORKS AS:</span>{item.servname}</p>
                                        <p><span id="top-tab">LOCATION:</span>{item.location}</p>
                                        <p><span id="top-tab">RATING:</span>{item.rating}</p>
                                      </div>
                                      <Link to="/datalog_book"><button className="book">Book</button></Link>
                                    
                                      {/* <div className="pers-two">
                                        
                                      </div> */}
                                      

                                    </div>
                                    
                                    
                                    
                            
                                    
                                  </div>
                                  
                                  
                                  
                                ))}
                             </div>
                             
                             {/* <div className="scr">
                                <button id="scroll">Next</button>
                             </div> */}
                             
                             
                           
                    </div>

                
            
    )
}
export default ServTableOne;
