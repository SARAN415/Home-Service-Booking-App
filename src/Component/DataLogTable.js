import React from "react";
import './../Style/table.css';

function DataLogTable({data}){
    
    return(
        <div className="services">
                
                
                <div className="servicess" >
                  <table id="tab">
                      <tbody>
                          <tr id="row_1">
                              {/* <th id="tab-two">Id</th> */}
                              <th id="tab-two">Username</th>
                              <th id="tab-two">Password</th>
                              
                          </tr>
                            {data.map(item=>(
                              <tr id="row_2" key={item.id}> 
                                
                                {/* <td id="tab-two">{item.id}</td> */}
                                <td id="tab-two">{item.username}</td>
                                <td id="tab-two">{item.password}</td>
                                
                          
                              </tr>
                            ))}
                      </tbody>
                            
                            
                  </table>
            </div>

                
            </div>
    )
}
export default DataLogTable;
