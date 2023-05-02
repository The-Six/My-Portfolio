import React, { useState, useEffect } from "react";
import "./logentry.css";

function LogEntryForm() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="left-align-text">
      <p className="spacer">Call-Sign: Rogue One</p>
      <p className="spacer">Orbiting: Coruscant</p>
      <p className="spacer">Target: Death Star</p>
      <p className="spacer">Date: {date.toString()}</p>
    </div>
  );
}

export default LogEntryForm;
