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
    <div>
      <p>Protocol: <span className="blinking-text">66</span></p>
      <p>Location: Coruscant</p>
      <p>Vessel: Eta-2 Actis-class interceptor</p>
      <p>Log Date: {date.toString()}</p>
    </div>
  );
}

export default LogEntryForm;
