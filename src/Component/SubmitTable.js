import React from "react";
import axios from "axios";
import './../Style/service_one.css';

function SubmitTable({data}){
  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:3001/delete_1/"+id);
      window.location.reload();

    }catch(err){
      console.log(err);
    }
  }
    return(
        <div className="serviceuser">
                          
                            {data.map(item=>(
                              <div  className="user-inters" key={item.id}>
                                <div className="pers-info-1">
                                  <img id="mem" src={item.servimg.replace(/[`'=]/g, '').replace(/[  ]/g,'+')} alt=""/>
                                  <h1 id="userfull">{item.name}</h1>
                                  
                                </div>
                                
                                <div className="pers-info-2">
                                    <p><span id="top-tab">SERVICE MEMBER ID:</span>{item.id}</p>
                                    <p><span id="top-tab">USERID:{item.userid}</span></p>
                                    <p><span id="top-tab">USER NAME:</span><span id="usersfull">{item.username}</span></p>
                                    <p><span id="top-tab">EMAILID:</span>{item.useremailid}</p>
                                    <p><span id="top-tab">USER PHNO:</span>{item.userphno}</p>
                                    <p><span id="top-tab">USER ADDRESS:</span>{item.useraddress}</p>
                                    
                                </div>
                                <button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button>
                              </div> 
                                
                            ))}
                      
            

                
            </div>
    )
}
export default SubmitTable;
