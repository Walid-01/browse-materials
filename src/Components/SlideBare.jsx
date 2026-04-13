import React from "react";
import { Icon } from "./Icon";
import logo from "../assets/img.png";

const navItems = [
  { label: "Dashboard", icon: <Icon.dashboard /> },
  { label: "My Projects", icon: <Icon.projects /> },
  { label: "My Requests", icon: <Icon.requests /> },
  { label: "Browse Materials", icon: <Icon.browse />, active: true },
];

export default function SlideBare({ activeLabel = "Browse Materials" }) {
  return (
    <aside className="li-sidebar">
      <div>
        <div className="li-brand">
          <div className="li-brand-logo">
            <img src={logo} alt="ESI-GM Logo" className="li-logo-img" />
          </div>

          <div className="li-brand-text">
            <h3>ESI-GM</h3>
            <p>ESI 8 Mai 1945</p>
          </div>
        </div>

        <div className="li-nav-list">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`li-nav-btn ${
                activeLabel === item.label || item.active ? "active" : ""
              }`}
            >
              <span className="li-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="li-sidebar-bottom">
        <div className="li-admin-info">
          <p>Sarah Student</p>
          <span>Student</span>
        </div>

        <div className="li-bottom-actions">
          <button type="button" className="li-logout-btn">
            <span className="li-nav-icon">
              <Icon.logout />
            </span>
            <span>Logout</span>
          </button>
        </div>

        <div className="li-close-row">×</div>
      </div>
    </aside>
  );
}