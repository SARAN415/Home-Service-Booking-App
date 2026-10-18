import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./../Style/login.css";

function ServmemLog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); setStatus("");
    try {
      const response = await axios.post("http://localhost:3001/servmem_log", { username, password });
      if (response.data?.message) setStatus(response.data.message);
      else navigate("/dataone_home");
    } catch { setStatus("We couldn't sign you in. Please check your connection and try again."); }
  }

  return <AuthLayout activeRole="Service member" title="Service member sign in" subtitle="Open your workspace to review profile details and upcoming bookings.">
    <form className="auth-form" onSubmit={login}>
      <label htmlFor="member-id">Member ID or email<input id="member-id" type="text" autoComplete="username" placeholder="Enter your ID or email" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
      <label htmlFor="member-password">Password<input id="member-password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
      <button type="submit" className="auth-submit">Sign in <span aria-hidden="true">→</span></button>
      {status && <p className="form-status" role="alert">{status}</p>}
    </form>
  </AuthLayout>;
}

export default ServmemLog;
