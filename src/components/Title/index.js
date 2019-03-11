import React from "react";


const Header = props => (
  <section className="hero is-info is-small is-bold">
  <div className="hero-body">
  <div className="container hero">
    <h1 className="title">{props.children}</h1>
    <h2 className="subtitle scores">
      Score: {props.score} Highscore: {props.highscore}
    </h2>
    </div>
  </div>
  </section>
);

export default Header;