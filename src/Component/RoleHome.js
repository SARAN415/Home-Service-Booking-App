import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../Images/logo.png";

function RoleHome({ role, eyebrow, title, summary, primary, cards, logoutTo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="all role-home">
      <nav className="navbar bg" aria-label={`${role} navigation`}>
        <Link to="#home" smooth className="brand-link" aria-label="Service Space home">
          <img src={logo} alt="Service Space" id="logo" />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="role-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span aria-hidden="true">☰</span> Menu
        </button>
        <div className={`links-container ${isOpen ? "is-open" : ""}`} id="role-navigation">
          <Link to="#home" smooth className="link" onClick={() => setIsOpen(false)}>Overview</Link>
          {cards.map((card) => (
            <Link key={card.to} to={card.to} className="link" onClick={() => setIsOpen(false)}>{card.label}</Link>
          ))}
          <Link to={logoutTo} className="link link--logout" onClick={() => setIsOpen(false)}>Log out</Link>
        </div>
      </nav>

      <main id="main-content">
        <section className="role-hero" id="home">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="role-hero__summary">{summary}</p>
            <Link to={primary.to} className="button button--primary">{primary.label}<span aria-hidden="true">→</span></Link>
          </div>
          <aside className="role-hero__panel" aria-label={`${role} workspace summary`}>
            <span className="role-hero__icon" aria-hidden="true">✦</span>
            <p>One focused workspace</p>
            <strong>Clear next steps, responsive data views, and live support when you need it.</strong>
          </aside>
        </section>

        <section className="workspace-grid" aria-label={`${role} shortcuts`}>
          {cards.map((card, index) => (
            <article className="workspace-card" key={card.to}>
              <span className="workspace-card__number">0{index + 1}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <Link to={card.to} className="text-link">{card.label}<span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default RoleHome;
