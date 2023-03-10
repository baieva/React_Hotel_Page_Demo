import React from "react";

import "./Title.css";

/* a self designed title */
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
}
