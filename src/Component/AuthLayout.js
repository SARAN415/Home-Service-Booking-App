import React from "react";
import { Link } from "react-router-dom";

const roles = [
  { label: "Customer", to: "/" },
  { label: "Admin", to: "/admin_log" },
  { label: "Service member", to: "/servmem_log" },
  { label: "Customer care", to: "/custmem_log" },
];

function AuthLayout({ activeRole, title, subtitle, children, footer }) {
  return (
    <main className="auth-page" id="main-content">
      <aside className="auth-aside">
        <Link to="/" className="auth-mark"><span aria-hidden="true">✦</span> Service Space</Link>
        <div className="auth-aside__copy"><p className="eyebrow">One connected service network</p><h1>Every role, a clearer workspace.</h1><p>Choose your portal to manage services, schedules, customer details, and support conversations.</p></div>
        <nav className="role-picker" aria-label="Choose portal">
          {roles.map((role) => <Link key={role.to} className={activeRole === role.label ? "is-active" : ""} to={role.to}>{role.label}<span aria-hidden="true">→</span></Link>)}
        </nav>
      </aside>
      <section className="auth-content">
        <div className="auth-card">
          <p className="eyebrow">{activeRole} portal</p>
          <h2>{title}</h2>
          {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}
          {children}
          {footer && <div className="auth-card__footer">{footer}</div>}
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;
