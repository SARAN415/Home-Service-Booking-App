import React from "react";
import "./../Style/home.css";
import RoleHome from "./RoleHome";

function DataOneHome() {
  return <RoleHome
    role="Service member"
    eyebrow="Service member workspace"
    title="Make every booking feel well managed."
    summary="Review your profile, keep an eye on booked services, and stay ready for the next customer request."
    primary={{ to: "/service_det", label: "View my details" }}
    logoutTo="/servmem_log"
    cards={[
      { to: "/service_det", label: "My profile", title: "Service details", description: "View your experience, service area, and profile information in one place." },
      { to: "/databook_one", label: "Booked details", title: "Booking queue", description: "Find customer booking details quickly using the updated responsive data view." },
      { to: "/chat_home", label: "Open chat", title: "Live support", description: "Join a conversation when you need to clarify a booking or help a customer." },
    ]}
  />;
}

export default DataOneHome;
