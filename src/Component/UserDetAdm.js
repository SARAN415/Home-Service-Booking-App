import React from "react";

const UserDetAdm =({data})=>{
    
    return(
        <div className="services">
                
                
                <div className="service" >
                  <table id="tab">
                      <tbody>
                          <tr id="row_1">
                              <th>id</th>
                              <th>username</th>
                              <th>password</th>
                          </tr>
                            {data.map(item=>(
                              <tr id="row_2" key={item.id}> 
                                
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                
                              </tr>
                            ))}
                      </tbody>
                            
                            
                  </table>
            </div>

                
            </div>
    )
}
export default UserDetAdm;
