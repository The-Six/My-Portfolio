import React, { useState, useEffect } from "react";
import "./spaceShip.css";

function SpaceshipMonitor() {
  // These are state variables that hold the current values for altitude, velocity, and fuelRemaining, respectively
  const [altitude, setAltitude] = useState(2146);
  const [velocity, setVelocity] = useState(2023);
  const [fuelRemaining, setFuelRemaining] = useState(5486);

  // This useEffect hook is used to update the state variables with new values at a fixed interval
  useEffect(() => {
    // setInterval is used to repeatedly execute the callback function after every 3 seconds
    const intervalId = setInterval(() => {
      // The setAltitude function is used to update the altitude state variable with a new random value between 1000 and 11000 meters
      setAltitude(Math.floor(Math.random() * 10000) + 1000);
      // The setVelocity function is used to update the velocity state variable with a new random value between 500 and 5500 meters/second
      setVelocity(Math.floor(Math.random() * 5000) + 500);
      // The setFuelRemaining function is used to update the fuelRemaining state variable with a value that is 10 less than the previous value
      setFuelRemaining((prevFuelRemaining) => prevFuelRemaining - 10);
    }, 3000);

    // The return statement within useEffect is used to cleanup any resources that were created within the effect
    // In this case, it clears the interval to stop the execution of the callback function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="space-container">
      <p>&nbsp;Altitude:&nbsp;{altitude}m</p>
      <p>&nbsp;Velocity:&nbsp;{velocity}m/s</p>
      <p>&nbsp;Fuel Remaining:&nbsp;{fuelRemaining}&nbsp;liters</p>
    </div>
  );
}

export default SpaceshipMonitor;
