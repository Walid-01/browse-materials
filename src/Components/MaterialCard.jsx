import React from "react";

export default function MaterialCard({
  image,
  title,
  description,
  category,
  location,
  status = "Available",
}) {
  return (
    <article className="li-material-card">
      <span className="li-material-status">{status}</span>

      <div className="li-material-image">
        {image ? <img src={image} alt={title} /> : null}
      </div>

      <div className="li-material-content">
        <div className="li-material-top">
          <h3>{title}</h3>
          <p className="li-material-desc">{description}</p>
        </div>

        <div className="li-material-bottom">
          <div className="li-material-info">
            <span className="label">Category:</span>
            <span className="value">{category}</span>
          </div>

          <div className="li-material-info">
            <span className="label">Location:</span>
            <span className="value">{location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}