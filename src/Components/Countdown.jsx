import React, { useEffect, useState } from "react";

const WEDDING_DATE = "2026-10-08T15:00:00";
const Countdown = () => {
  const getTimeLeft = () => {
    const difference = new Date(WEDDING_DATE).getTime() - Date.now();
    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / 86400000)).padStart(2, "0"),
      hours: String(Math.floor((difference / 3600000) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 60000) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section" id="details">
      <div className="section-heading">
        <p className="eyebrow">THE WAIT IS ON</p>
        <h2>
          Counting down to
          <br />
          the big day.
        </h2>
      </div>

      <div className="countdown">
        {[
          ["days", time.days],
          ["hours", time.hours],
          ["minutes", time.minutes],
          ["seconds", time.seconds],
        ].map(([label, value]) => (
          <div className="count-unit" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
