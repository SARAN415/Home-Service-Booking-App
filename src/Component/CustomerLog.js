import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./../Style/login.css";

function CustomerLog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); setStatus("");
    try {
      const response = await axios.post("http://localhost:3001/customer_log", { username, password });
      if (response.data?.message) setStatus(response.data.message);
      else navigate("/datatwo_home");
    } catch { setStatus("We couldn't sign you in. Please check your connection and try again."); }
  }

  return <AuthLayout activeRole="Customer care" title="Support team sign in" subtitle="Access the customer-care workspace and service conversations.">
    <form className="auth-form" onSubmit={login}>
      <label htmlFor="support-id">Support ID<input id="support-id" type="text" autoComplete="username" placeholder="Enter your ID" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
      <label htmlFor="support-password">Password<input id="support-password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
      <button type="submit" className="auth-submit">Sign in <span aria-hidden="true">→</span></button>
      {status && <p className="form-status" role="alert">{status}</p>}
    </form>
  </AuthLayout>;
}

export default CustomerLog;
