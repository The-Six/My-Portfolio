import React, { useState } from "react";

function LogEntryForm() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h4>Spaceship Log</h4>
      <h5>Date/Time: {date.toString()}</h5>
      <h5>-------------</h5>
    </div>
  );
}

export default LogEntryForm;
