import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./../Style/login.css";

function AdmLog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); setStatus("");
    try {
      const response = await axios.post("http://localhost:3001/adm_log", { user: username, password });
      if (response.data?.message) setStatus(response.data.message);
      else navigate("/data_home");
    } catch { setStatus("We couldn't sign you in. Please check your connection and try again."); }
  }

  return <AuthLayout activeRole="Admin" title="Admin sign in" subtitle="Use your administrator credentials to manage the service network.">
    <form className="auth-form" onSubmit={login}>
      <label htmlFor="admin-id">Administrator ID<input id="admin-id" type="text" autoComplete="username" placeholder="Enter your ID" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
      <label htmlFor="admin-password">Password<input id="admin-password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
      <button type="submit" className="auth-submit">Sign in <span aria-hidden="true">→</span></button>
      {status && <p className="form-status" role="alert">{status}</p>}
    </form>
  </AuthLayout>;
}

export default AdmLog;
