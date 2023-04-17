import React, { useState, useEffect } from "react";
import "./spaceShip.css";

function SpaceshipMonitor() {
    const [altitude, setAltitude] = useState(2146);
    const [velocity, setVelocity] = useState(2023);
    const [fuelRemaining, setFuelRemaining] = useState(5486);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Generate random values within a reasonable range
        setAltitude(Math.floor(Math.random() * 10000) + 1000);
        setVelocity(Math.floor(Math.random() * 5000) + 500);
        setFuelRemaining(prevFuelRemaining => prevFuelRemaining - 10);
    }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="glitch-container">
          <p>&nbsp;Altitude:&nbsp;{altitude}m</p>
          <p>&nbsp;Velocity:&nbsp;{velocity}m/s</p>
          <p>&nbsp;Fuel Remaining:&nbsp;{fuelRemaining}&nbsp;liters</p>
          </div>
    );
  }

  export default SpaceshipMonitor