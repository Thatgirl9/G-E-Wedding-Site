import React from "react";
const Hero = () => {
  return (
    <section className="hero" id="story">
      <div className="hero-copy">
        <p className="eyebrow">A NEW CHAPTER BEGINS</p>
        <p className="hero-monogram">G & E</p>

        <h1>
          Welcome
          <br />
          <em>to our wedding.</em>
        </h1>
        <p className="hero-date">08.10.2026 · Save the date</p>
      </div>
      <div className="hero-frame">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1500&q=90"
          alt="Wedding couple, Glory and Ese"
        />
        <div className="hero-stamp">
          G<br />&<br />E
        </div>
      </div>
    </section>
  );
};

export default Hero;
