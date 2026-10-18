import React from "react";
import {Link} from 'react-router-dom';
import './../Style/home.css';

function SuccessMsg(){
         
    return(
        <div className="success_2" id="signup">
            <div className="success_1">
               <h1>You have been successfully booked our service</h1>
               <h2>Our service members will reach you after 1week</h2>

               <button><Link to="/home">Go back to Home Page</Link></button> 
            </div>
        </div>
    )
}
export default SuccessMsg;