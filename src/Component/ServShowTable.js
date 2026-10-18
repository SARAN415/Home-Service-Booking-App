import React from "react";
import { Link } from "react-router-dom";
import "./../Style/service_one.css";

const imageSource = (value) => value ? String(value).replace(/[`'=]/g, "").replace(/[  ]/g, "+") : "";

const ServShowTable = ({ data }) => (
  <div className="service">
    {data.map((item) => (
      <article className="user-inter" key={item.id}>
        <div className="pers-info-1">
          {imageSource(item.servimg) ? <img id="mem" src={imageSource(item.servimg)} alt={item.name || "Service member"} /> : <div className="member-image-fallback" aria-hidden="true">{String(item.name || "S").charAt(0)}</div>}
          {imageSource(item.servlogo) && <img id="mems" src={imageSource(item.servlogo)} alt="Service brand logo" />}
          <h2 id="userfull">{item.name}</h2>
        </div>
        <div className="pers-info"><div className="pers-one">
          <p><span id="top-tab">Service</span><span>{item.servname || "Not specified"}</span></p>
          <p><span id="top-tab">Location</span><span>{item.location || "Not specified"}</span></p>
          <p><span id="top-tab">Experience</span><span>{item.experience ? `${item.experience} years` : "Not specified"}</span></p>
          <p><span id="top-tab">Rating</span><span>{item.rating || "New"}</span></p>
        </div></div>
        <Link to={`/datalog_two/${item.id}`}><button className="update" type="button">View details</button></Link>
        <Link to={`/accepted_det/${item.id}`}><button className="select" type="button">View booking status</button></Link>
      </article>
    ))}
  </div>
);

export default ServShowTable;
