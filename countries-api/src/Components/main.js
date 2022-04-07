import React from "react";

import "../Styles/main.css";

export default function Main() {
  return (
    <section>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="content">
              <p>Card 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns"></div>
    </section>
  );
}
