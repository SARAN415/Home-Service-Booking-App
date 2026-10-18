import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './../Style/table.css';

function DataOneServTable({data}){
  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:3001/delete/"+id);
      window.location.reload();

    }catch(err){
      console.log(err);
    }
  }
    return(
        <div className="serviced">
                
                
                    <div className="servicee" >
                        <table id="tab">
                          <tbody>
                             <tr id="row_1">
                                <th id="tab-two">Id</th>
                                <th id="tab-two">Name</th>
                                <th id="tab-two">Emailid</th>
                                <th id="tab-two">DOB</th>
                                <th id="tab-two">Phone number</th>
                                <th id="tab-two">Experience</th>
                                <th id="tab-two">Joining date</th>
                                <th id="tab-two">Service name</th>
                                <th id="tab-two">Location</th>
                                <th id="tabtop">Update</th>
                                {/* <th id="tabtop">Add Image</th> */}
                                <th id="tabtop">Delete</th>
                             </tr>
                             {data.map(item=>(
                              <tr id="row_2" key={item.id}> 
                                <td id="tab-two">{item.id}</td>
                                <td id="tab-two">{item.name}</td>
                                <td id="tab-two">{item.emailid}</td>
                                <td id="tab-two">{item.dob}</td>
                                <td id="tab-two">{item.phno}</td>
                                <td id="tab-two">{item.experience}</td>
                                <td id="tab-two">{item.joiningdate}</td>
                                <td id="tab-two">{item.servname}</td>
                                <td id="tab-two">{item.location}</td>
                                <td id="tab-two"><button className="update"><Link to={`/update/${item.id}`}>Update</Link></button></td>
                                {/* <td id="tab-two"><button className="update"><Link to={`/upload/${item.id}`}>Add image</Link></button></td> */}
                                <td id="tab-two"><button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button></td>
                              </tr>
                             ))}
                            </tbody>
                            
                            
                        </table>
                    </div>

                
            </div>
    )
}
export default DataOneServTable;
