import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ServShowTable from "./ServShowTable";
import { EmptyState, ErrorState, LoadingState } from "./PageFeedback";
import "./../Style/home.css";

const categories = ["All", "Cleaning", "Carpentry", "Electrician", "Catering"];

function ServMemShow() {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isCurrent = true;
    async function fetchServices() {
      try {
        const response = await axios.get("http://localhost:3001/services");
        if (isCurrent) setServices(Array.isArray(response.data) ? response.data : []);
      } catch {
        if (isCurrent) setError("We couldn't load service members right now. Please refresh and try again.");
      } finally {
        if (isCurrent) setIsLoading(false);
      }
    }
    fetchServices();
    return () => { isCurrent = false; };
  }, []);

  const visibleServices = useMemo(() => {
    const term = query.trim().toLowerCase();
    return services.filter((item) => {
      const matchesTerm = !term || [item.name, item.servname, item.location].some((value) => String(value || "").toLowerCase().includes(term));
      const matchesCategory = category === "All" || String(item.servname || "").toLowerCase().includes(category.toLowerCase());
      return matchesTerm && matchesCategory;
    });
  }, [category, query, services]);

  const clearFilters = () => { setQuery(""); setCategory("All"); };

  return (
    <main className="directory-page container" id="main-content">
      <header className="page-intro">
        <div><p className="eyebrow">Service directory</p><h1>Find the right person for the job.</h1><p>Search by a member’s name, the service you need, or your location — then compare the details that matter.</p></div>
        <Link to="/home" className="page-intro__back">← Back to home</Link>
      </header>
      <section className="directory-toolbar" aria-label="Filter service members">
        <label className="search-field" htmlFor="member-search"><span>Search directory</span><input id="member-search" className="search-items" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, service, or location" /></label>
        <div className="filter-group"><span>Quick categories</span><div className="filter-chips" role="group" aria-label="Service categories">{categories.map((item) => <button type="button" key={item} className={category === item ? "is-selected" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
      </section>
      <div className="directory-meta" aria-live="polite"><p>{isLoading ? "Loading directory…" : `${visibleServices.length} ${visibleServices.length === 1 ? "service member" : "service members"} found`}</p>{(query || category !== "All") && <button type="button" onClick={clearFilters}>Clear filters</button>}</div>
      <section className="directory-results" aria-label="Service member results">
        {isLoading && <LoadingState label="Loading service members…" />}
        {!isLoading && error && <ErrorState message={error} />}
        {!isLoading && !error && visibleServices.length === 0 && <EmptyState title="No service members match that search" message="Try a different name, location, or category." />}
        {!isLoading && !error && visibleServices.length > 0 && <ServShowTable data={visibleServices} />}
      </section>
    </main>
  );
}

export default ServMemShow;
