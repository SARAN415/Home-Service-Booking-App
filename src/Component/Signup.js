import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./../Style/login.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function signup(event) {
    event.preventDefault();
    setStatus("");
    if (password !== confirmPassword) {
      setStatus("Your passwords don't match yet.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/signup", { username, password });
      if (response.data?.Status === "Success") {
        navigate("/");
        return;
      }
      setStatus("We couldn't create your account. Please try again.");
    } catch (error) {
      const message = error?.response?.data?.Message || "We couldn't create your account. Please check your connection and try again.";
      setStatus(message);
    }
  }

  return <AuthLayout activeRole="Customer" title="Create your account" subtitle="Save time on future bookings with a Service Space account." footer={<>Already have an account? <Link to="/">Sign in</Link></>}>
    <form className="auth-form" onSubmit={signup}>
      <label htmlFor="signup-email">Email address<input id="signup-email" type="email" autoComplete="username" placeholder="you@example.com" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
      <label htmlFor="signup-name">Your name<input id="signup-name" type="text" autoComplete="name" placeholder="How should we address you?" value={displayName} onChange={(event) => setDisplayName(event.target.value)} required /></label>
      <label htmlFor="signup-password">Password<input id="signup-password" type="password" autoComplete="new-password" placeholder="Choose a password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
      <label htmlFor="signup-confirm">Confirm password<input id="signup-confirm" type="password" autoComplete="new-password" placeholder="Repeat your password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required /></label>
      <button type="submit" className="auth-submit">Create account <span aria-hidden="true">→</span></button>
      {status && <p className="form-status" role="alert">{status}</p>}
    </form>
  </AuthLayout>;
}

export default Signup;
