import React, { useState, useEffect } from "react";
import "./spaceShip.css";

function SpaceshipMonitor() {
  // Initialize state variables with default values
  const [altitude, setAltitude] = useState(2146);
  const [velocity, setVelocity] = useState(2023);
  const [fuelRemaining, setFuelRemaining] = useState(54860);

  // Initialize state variables for altitude and velocity directions
  const [altitudeDirection, setAltitudeDirection] = useState("");
  const [velocityDirection, setVelocityDirection] = useState("");

  // Use useEffect hook to update state variables at fixed intervals
  useEffect(() => {
    // Use setInterval to repeatedly execute a callback function after every 3 seconds
    const intervalId = setInterval(() => {
      // Generate new values for altitude and velocity
      const newAltitude = Math.floor(Math.random() * 10000) + 1000;
      const newVelocity = Math.floor(Math.random() * 5000) + 500;

      // Update altitude and velocity directions based on whether they have increased or decreased
      setAltitudeDirection(newAltitude > altitude ? "up" : "down");
      setVelocityDirection(newVelocity > velocity ? "up" : "down");

      // Update state variables with new values
      setAltitude(newAltitude);
      setVelocity(newVelocity);

      // Update fuelRemaining state variable by decrementing its previous value by 10
      setFuelRemaining((prevFuelRemaining) => prevFuelRemaining - 146);
    }, 3000);

    // Return a cleanup function that clears the interval to stop the execution of the callback function
    return () => clearInterval(intervalId);
  }, []);

  // Render altitude, velocity, and fuelRemaining values with corresponding directional arrows
  return (
    <div className="space-container">
      <p>
        &nbsp;Altitude:&nbsp;{altitude}m&nbsp;
        {altitudeDirection === "up" ? (
          <span>&uarr;</span>
        ) : (
          <span>&darr;</span>
        )}
      </p>
      <p>
        &nbsp;Velocity:&nbsp;{velocity}m/s&nbsp;
        {velocityDirection === "up" ? (
          <span>&uarr;</span>
        ) : (
          <span>&darr;</span>
        )}
      </p>
      <p>&nbsp;Hypermatter Reactor:&nbsp;{fuelRemaining}TWh</p>
    </div>
  );
}


export default SpaceshipMonitor;
