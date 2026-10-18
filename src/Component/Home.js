import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./../Style/home.css";
import logo from "./../Images/logo.png";
import heroImage from "./../backimg.jpeg";

const services = [
  { icon: "✦", title: "Home cleaning", copy: "Routine, deep, and move-in cleaning from trusted local professionals." },
  { icon: "⌂", title: "Carpentry", copy: "Practical repairs and thoughtful upgrades for every room." },
  { icon: "ϟ", title: "Electrical", copy: "Reliable electrical assistance for homes and small workplaces." },
  { icon: "◒", title: "Catering", copy: "Comforting food and smooth service for gatherings of every size." },
];

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="all public-home">
      <nav className="navbar bg" aria-label="Primary navigation">
        <Link to="#home" smooth className="brand-link" aria-label="Service Space home">
          <img src={logo} alt="Service Space" id="logo" />
        </Link>
        <button className="nav-toggle" type="button" aria-expanded={isOpen} aria-controls="site-navigation" onClick={() => setIsOpen(!isOpen)}>
          <span aria-hidden="true">☰</span> Menu
        </button>
        <div className={`links-container ${isOpen ? "is-open" : ""}`} id="site-navigation">
          <Link to="#home" smooth className="link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="#services" smooth className="link" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="#how-it-works" smooth className="link" onClick={() => setIsOpen(false)}>How it works</Link>
          <Link to="#contact" smooth className="link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/" className="link link--logout" onClick={() => setIsOpen(false)}>Log out</Link>
        </div>
        <Link to="/chat_home" className="nav-action">Get support</Link>
      </nav>

      <main id="main-content">
        <section className="home-hero" id="home">
          <div className="home-hero__content">
            <p className="eyebrow">Local services, made simpler</p>
            <h1>Help for the work that makes a place feel like home.</h1>
            <p className="home-hero__summary">Discover vetted service members, compare the right fit, and keep every booking in one clear place.</p>
            <div className="hero-actions">
              <Link to="/servmem_show" className="button button--primary">Find a service <span aria-hidden="true">→</span></Link>
              <Link to="#how-it-works" smooth className="button button--secondary">See how it works</Link>
            </div>
            <div className="trust-row" aria-label="Service benefits">
              <span><b>4</b> service categories</span><span><b>1</b> shared booking space</span><span><b>Live</b> customer support</span>
            </div>
          </div>
          <div className="home-hero__visual">
            <img src={heroImage} alt="Professionals collaborating on a home service project" />
            <div className="hero-note"><span aria-hidden="true">✓</span><div><strong>Clearer bookings</strong><small>Search, select, and follow up in one flow.</small></div></div>
          </div>
        </section>

        <section className="section-block" id="services">
          <div className="section-heading"><p className="eyebrow">Built around everyday needs</p><h2>Find help, without the runaround.</h2><p>Start with the kind of work you need. The service directory lets you narrow results by name, service, or location.</p></div>
          <div className="service-cards">
            {services.map((service) => <article className="service-card" key={service.title}><span className="service-card__icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.copy}</p><Link to="/servmem_show" className="text-link">Explore members <span aria-hidden="true">→</span></Link></article>)}
          </div>
        </section>

        <section className="process-section" id="how-it-works">
          <div className="section-heading"><p className="eyebrow">A calmer process</p><h2>From search to service in three steps.</h2></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Search smartly</h3><p>Use a name, service, or location to find an available service member.</p></div></li>
            <li><span>02</span><div><h3>Review the fit</h3><p>Look through experience, location, ratings, and service details before choosing.</p></div></li>
            <li><span>03</span><div><h3>Stay in the loop</h3><p>Track booking details and use live chat whenever you need a hand.</p></div></li>
          </ol>
        </section>

        <section className="contact-panel" id="contact">
          <div><p className="eyebrow">Need a quick answer?</p><h2>Our support space is just a message away.</h2><p>Use live chat to ask a question before or after you book.</p></div>
          <Link to="/chat_home" className="button button--primary">Open live chat <span aria-hidden="true">→</span></Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
