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
      <p className="spacer">Protocol: <span className="blinking-text">66</span></p>
      <p className="spacer">Location: Coruscant</p>
      <p className="spacer">Vessel: Death Star</p>
      <p className="spacer">Date: {date.toString()}</p>
    </div>
  );
}

export default LogEntryForm;
