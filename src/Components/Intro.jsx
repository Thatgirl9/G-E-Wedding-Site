import React from "react";

const IntroDetails = [
  {
    title: "DATE",
    value: "8 October",
  },
  {
    title: "DAY",
    value: "Thursday",
  },
  {
    title: "TIME",
    value: "1:30 PM",
  },
];

const ZoomDetails = [
  {
    title: "MEETING ID",
    value: "605 996 0468",
  },
  {
    title: "PASSCODE",
    value: "ESEGLORY26",
  },
];

const Intro = () => {
  return (
    <section className="intro-section">
      <p className="eyebrow intro-eyebrow">
        WITH JOYFULL HEARTS AND With the consent of our families
      </p>
      <p className="intro-text">
        <em>We are getting married and we'd love for you to witness it.</em>
      </p>
      <h2 className="hero-monogram couples-name">
        Glory
        <br />
        &
        <br />
        Ese
      </h2>
      <p className="intro-text-details">
        You're warmly invited to join our wedding ceremony, celebrated live and
        beamed straight to wherever you are. Please log in and share this
        beautiful moment with us as we exchange our vows.
      </p>

      <div className="border-div"></div>

      <div className="intro-details-container">
        {IntroDetails.map((detail, index) => (
          <div className="intro-date " key={index}>
            <p className="eyebrow">{detail.title}</p>
            <p className="intro-date-value">{detail.value}</p>
          </div>
        ))}
      </div>

      <div className="zoom-details-container">
        <p className="eyebrow zoom-iv">JOINING US ON ZOOM</p>
        <div className="dotted-border"></div>

        <div className="zoom-details">
          {ZoomDetails.map((detail, index) => (
            <div className="zoom-info" key={index}>
              <p className="eyebrow">{detail.title}</p>
              <p className="zoom-info-value">{detail.value}</p>
            </div>
          ))}
        </div>

        <p className="small-note">
          Kindly log in by 1:30 pm prompt, the ceremony begins on time.{" "}
        </p>
      </div>
    </section>
  );
};

export default Intro;
