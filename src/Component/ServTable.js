import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function ServTable({data}){
    const handleDelete = async (id) =>{
      try{
        await axios.delete("http://localhost:3001/delete/"+id);
        window.location.reload();

      }catch(err){
        console.log(err);
      }
    }
    return(
      
        <div className="servbody">
          
                    
                        <table className="table-fill">
                          <tbody>
                             <tr id="row_1">
                                
                                <th>Id</th>
                                <th>Name</th>
                                <th>Emailid</th>
                                <th>DOB</th>
                                <th>Phone number</th>
                                <th>Experience</th>
                                <th>Joining date</th>
                                <th>Service name</th>
                                <th>Location</th>
                                
                             </tr>
                             {data.map(item=>(
                              <tr id="row_2" key={item.id}> 
                                
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.emailid}</td>
                                <td>{item.dob}</td>
                                <td>{item.phno}</td>
                                <td>{item.experience}</td>
                                <td>{item.joiningdate}</td>
                                <td>{item.servname}</td>
                                <td>{item.location}</td>
                                <td><button className="update"><Link to={`/update/${item.id}`}>Update</Link></button></td>
                                <td><button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button></td>
                              </tr>
                             ))}
                            </tbody>
                            
                            
                        </table>
                    </div>

                
            
    )
}
export default ServTable;
