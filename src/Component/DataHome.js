import React from "react";
import "./../Style/home.css";
import RoleHome from "./RoleHome";

function DataHome() {
  return <RoleHome
    role="Admin"
    eyebrow="Admin workspace"
    title="Keep the service network moving."
    summary="Review member records, monitor customer bookings, and keep service data accurate from one responsive dashboard."
    primary={{ to: "/userlog_det", label: "Review customer records" }}
    logoutTo="/admin_log"
    cards={[
      { to: "/userlog_det", label: "Customer records", title: "Customer details", description: "Review account and booking information with search tools built for busy days." },
      { to: "/datalog_one", label: "Service members", title: "Member directory", description: "Maintain service-member details, update records, and add new members." },
      { to: "/chat_table", label: "Support rooms", title: "Chat overview", description: "See support room information and help route live conversations." },
    ]}
  />;
}

export default DataHome;
