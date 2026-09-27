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
        src="https://res.cloudinary.com/dtqlkvi26/image/upload/v1790491383/IMG_7694.jpg"
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
