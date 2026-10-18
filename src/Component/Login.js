import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./../Style/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    setStatus("");
    try {
      const response = await axios.post("http://localhost:3001/login", { username, password });
      if (response.data?.message) {
        setStatus(response.data.message);
        return;
      }
      navigate("/home");
    } catch (error) {
      const message = error?.response?.data?.message || "We couldn't sign you in. Please check your connection and try again.";
      setStatus(message);
    }
  }

  return <AuthLayout activeRole="Customer" title="Welcome back" subtitle="Sign in to search services, manage bookings, and get support." footer={<>New here? <Link to="/signup">Create your account</Link></>}>
    <form className="auth-form" onSubmit={login}>
      <label htmlFor="customer-email">Email address<input id="customer-email" type="email" autoComplete="username" placeholder="you@example.com" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
      <label htmlFor="customer-password">Password<input id="customer-password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
      <button type="submit" className="auth-submit">Sign in <span aria-hidden="true">→</span></button>
      {status && <p className="form-status" role="alert">{status}</p>}
    </form>
  </AuthLayout>;
}

export default Login;
