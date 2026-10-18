import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './../Style/table.css';

function ChatShow({data}){
  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:3001/delete_chat/"+id);
      window.location.reload();

    }catch(err){
      console.log(err);
    }
  }
    return(
        <div className="services">
                
                
                <div className="services" >
                  <table id="tab">
                      <tbody>
                          <tr id="row_1">
                              <th id="tab-two">Id</th>
                              <th id="tab-two">Chat id</th>
                              <th id="tab-two">Room id</th>
                              <th id="tab-two">Accept chat</th>
                              <th id="tab-two">Delete</th>
                          </tr>
                            {data.map(item=>(
                              <tr id="row_2" key={item.id}> 
                                
                                <td id="tab-two">{item.id}</td>
                                <td id="tab-two">{item.chatid}</td>
                                <td id="tab-two">{item.roomid}</td>
                                <td id="tab-two"><button className="update"><Link to={"/chat_home"}>Chat</Link></button></td>
                                <td id="tab-two"><button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button></td>
                          
                              </tr>
                            ))}
                      </tbody>
                            
                            
                  </table>
            </div>

                
            </div>
    )
}
export default ChatShow;
