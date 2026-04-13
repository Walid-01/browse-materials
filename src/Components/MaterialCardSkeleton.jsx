import React from "react";

export default function MaterialCardSkeleton() {
  return (
    <article className="li-material-card">
      <span className="li-material-status">Available</span>

      <div className="li-material-image skeleton" />

      <div className="li-material-content">
        <div className="li-material-top">
          <div className="li-line skeleton w-70" />
          <div className="li-line skeleton w-100" />
          <div className="li-line skeleton w-90" />
          <div className="li-line skeleton w-55" />
        </div>

        <div className="li-material-bottom">
          <div className="li-material-info">
            <span className="label">Category:</span>
            <span className="value">
              <div className="li-line skeleton w-70" />
            </span>
          </div>

          <div className="li-material-info">
            <span className="label">Location:</span>
            <span className="value">
              <div className="li-line skeleton w-55" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}