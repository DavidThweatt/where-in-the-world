import React from "react";
import "../Styles/header.css";

export default function Header() {
  return (
    <header className="level is-mobile">
      <div className="level-left m-2">
        <h1 className="level-item is-size-4">Where in the world?</h1>
      </div>
      <div className="level-right m-2">
        <button className="level-item">Dark Mode</button>
      </div>
    </header>
  );
}
