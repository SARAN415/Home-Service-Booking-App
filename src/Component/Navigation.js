import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import users from './user.png';
import admin from './admin.jpg';
import service from './servicemember.jpg';
import customer from './customerservice.png';
import './navigation.css';

function Navigation(){

    return(
        <div className="log_page">
            
            <div className="user_screen">
                
                <div className="users" id="users_log">
                    <div className="page">
                        
                        <div className="pagenext">
                            <Link to="#ad_log" smooth><button id="next">Admin</button></Link>
                        </div>
                    </div>
                    
                    <div className="user-form">
                        <div className="login-topic">
                            <h2>SRH SERVICE</h2>
                        </div>
                        <img id="log-img" src={users} alt="user-logo" width="250" height="300" />
                        <h3 id="log-topic">User</h3>
                        <Link to="/login"><button id="u_sub">Login</button></Link>
                        
                    </div>
                    
                </div>
                
            </div>
            
            <div className="admin_screen">
            
                <div className="admin" id="ad_log">
                    <div className="page">
                        <div className="next">
                            <Link to="#users_log" smooth><button id="next">User</button></Link>
                            
                        </div>
                        <div className="other">
                            <Link to="#serv_log" smooth><button id="next">Service Member</button></Link>
                        </div>
                    </div>
                    <div className="admin-form">
                        <div className="login-topic">
                            <h2>SRH SERVICE</h2>
                        </div>
                        <img id="log-img" src={admin} alt="user-logo" width="250" height="300" />
                        <h3 id="log-topic">Admin</h3>
                        <Link to="/admin_log"><button id="a_sub">Login</button></Link>
                    </div>
                    
                </div>
            </div>
            
            <div className="serv_screen">
                <div className="Service_member" id="serv_log">
                    <div className="page">
                        <div className="next">
                            <Link to="#ad_log" smooth><button id="next">Admin</button></Link>
                            
                        </div>
                        <div className="other">
                            <Link to="#customer_log" smooth><button id="next">Customer care</button></Link>
                        </div>
                    </div>
                    <div className="servicemem-form">
                        <div className="login-topic">
                            <h2>SRH SERVICE</h2>
                        </div>
                        <img id="log-img" src={service} alt="user-logo" width="250" height="300" />
                        <h3 id="log-topic">Service Member</h3>
                        <Link to="/servmem_log"><button id="a_sub">Login</button></Link>
                    </div>
                    
                </div>
            </div>
            
            <div className="customer_screen">
                <div className="customer_member" id="customer_log">
                    <div className="page">
                        <div className="otherpage">
                            <Link to="#serv_log" smooth><button id="next">Service Mmember</button></Link>
                            
                        </div>
                        
                    </div>
                    <div className="custmem-form">
                        <div className="login-topic">
                            <h2>SRH SERVICE</h2>
                        </div>
                        <img id="log-img" src={customer} alt="user-logo" width="250" height="300" />
                        <h3 id="log-topic">Customer Care Member</h3>
                        <Link to="/custmem_log"><button id="a_sub">Open</button></Link>
                    </div>
                    
                </div>
            </div>

        </div>

        

        
    )
}
export default Navigation;