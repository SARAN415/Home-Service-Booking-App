import React from "react";
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import './../Style/table.css';

function DataScheduleTable({data}){
//   const handleClick = async (id) =>{
//     try{
//       await axios.post("http://localhost:3001/accept/"+id);

//     }catch(err){
//       console.log(err);
//     }
//   }

//   const handleDelete = async (id) =>{
//     try{
//       await axios.delete("http://localhost:3001/delete_accept/"+id);
//       window.location.reload();

//     }catch(err){
//       console.log(err);
//     }
//   }

    return(
        <div className="services">
                
                
                <div className="servicesnew" >
                  <table id="tab">
                      <tbody>
                          <tr id="row_1">
                              <th>Servid</th>
                              <th id="tab-two">Userid</th>
                              <th id="tab-two">Username</th>
                              <th id="tab-two">Useremailid</th>
                              {/* <th id="tab-one">Userdob</th> */}
                              <th id="tab-two">Userphno</th>
                              <th id="tab-two">Houseno</th>
                              {/* <th id="tab-one">Date</th> */}
                              <th id="tab-two">Streetname</th>
                              <th id="tab-two">Areaname</th>
                              <th id="tab-two">Location</th>
                              <th id="tab-two">Date</th>
                              <th id="tab-two">Description</th>
                              {/* <th id="tabtop">Accept</th>
                              <th id="tabtop">Reject</th> */}
                              {/* <th id="tab-one">Phone number</th>
                              <th id="tab-one">Experience</th>
                              <th id="tab-one">Joining date</th>
                              <th id="tab-one">Service name</th>
                              <th id="tab-one">Location</th> */}
                          </tr>
                            {data.map(item=>(
                              <tr id="row_4" key={item.servid}> 
                                <td id="tab-one">{item.id}</td>
                                <td id="tab-one">{item.userid}</td>
                                <td id="tab-one">{item.username}</td>
                                <td id="tab-one">{item.useremailid}</td>
                                {/* <td id="tab-one">{item.userdob}</td> */}
                                <td id="tab-one">{item.userphno}</td>
                                <td id="tab-one">{item.houseno}</td>
                                {/* <td id="tab-one">{item.date}</td> */}
                                {/* <td><img src={item.servimg.replace(/[`'=]/g, '').replace(/[  ]/g,'+')} alt="" width="150" height="150"/></td> */}
                                <td id="tab-one">{item.streetname}</td>
                                <td id="tab-one">{item.areaname}</td>
                                <td id="tab-one">{item.location}</td>
                                <td id="tab-one">{item.date}</td>
                                <td id="tab-one">{item.descr}</td>
                                {/* <td id="tab-one">{item.experience}</td>
                                <td id="tab-one">{item.joiningdate}</td>
                                <td id="tab-one">{item.servname}</td>
                                <td id="tab-one">{item.location}</td> */}
                                {/* <td id="tab-one"><Link to="/accept_table"><button className="select" onClick={()=>handleClick(item.id)}>Accept</button></Link></td>
                                <td id="tab-two"><button className="delete" onClick={()=>handleDelete(item.id)}>Reject</button></td> */}
                              </tr>
                            ))}
                      </tbody>
                            
                            
                  </table>
            </div>

                
            </div>
    )
}
export default DataScheduleTable;
