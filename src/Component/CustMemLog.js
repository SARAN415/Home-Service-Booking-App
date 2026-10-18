import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./../Style/login.css";

function CustMemLog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); setStatus("");
    try {
      const response = await axios.post("http://localhost:3001/customer_log", { username, password });
      if (response.data?.message) setStatus(response.data.message);
      else navigate("/chat_table");
    } catch { setStatus("We couldn't sign you in. Please check your connection and try again."); }
  }

  return <AuthLayout activeRole="Customer care" title="Customer-care sign in" subtitle="Manage support conversations and help customers get to the right next step.">
    <form className="auth-form" onSubmit={login}>
      <label htmlFor="care-id">Customer-care ID<input id="care-id" type="text" autoComplete="username" placeholder="Enter your ID" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
      <label htmlFor="care-password">Password<input id="care-password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
      <button type="submit" className="auth-submit">Sign in <span aria-hidden="true">→</span></button>
      {status && <p className="form-status" role="alert">{status}</p>}
    </form>
  </AuthLayout>;
}

export default CustMemLog;
