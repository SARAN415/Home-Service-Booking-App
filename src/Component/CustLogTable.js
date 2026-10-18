import React from "react";
import axios from 'axios';
import './../Style/table.css';

function CustLogTable({data}){
    const handleDelete = async (chatid) =>{
        try{
          await axios.delete("http://localhost:3001/delete_chat/"+chatid);
          window.location.reload();
    
        }catch(err){
          console.log(err);
        }
      }
    return(
        <div className="services">
                
                
                <div className="servicess" >
                  <table id="tab">
                      <tbody>
                          <tr id="row_1">
                              <th id="tab-two">Chatid</th>
                              <th id="tab-two">Roomid</th>
                              <th id="tabtop">Accept</th>
                          </tr>
                            {data.map(item=>(
                              <tr id="row_2" key={item.chatid}> 
                                <td id="tab-two">{item.chatid}</td>
                                <td id="tab-two">{item.roomid}</td>
                                <td id="tab-two"><button className="delete" onClick={()=>handleDelete(item.chatid)}>Accept</button></td>
                          
                              </tr>
                            ))}
                      </tbody>
                            
                            
                  </table>
            </div>

                
            </div>
    )
}
export default CustLogTable;
