import React from "react";
import { Icon } from "./Icon";

export default function InventoryFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  total,
}) {
  return (
    <div className="li-filters-card">
      <div className="li-filters-top">
        <div className="li-search-box">
          <span className="li-search-icon">
            <Icon.search />
          </span>
          <input
            type="text"
            placeholder="Search materials by name or description"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="li-filter-box">
          <span className="li-search-icon">
            <Icon.filter />
          </span>
          <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="all">All categories</option>
            <option value="microcontrollers">Microcontrollers</option>
            <option value="development-boards">Development Boards</option>
            <option value="networking">Networking</option>
          </select>
        </div>
      </div>

      <div className="li-filters-meta">
        Showing {total} material{total !== 1 ? "s" : ""}
      </div>
    </div>
  );
}