import React from "react";
import './../Style/table.css';

function DataTwoServTable({data}){
  
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
                                
                              </tr>
                             ))}
                            </tbody>
                            
                            
                        </table>
                    </div>

                
            </div>
    )
}
export default DataTwoServTable;
