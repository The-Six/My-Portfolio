import React, { useState, useEffect } from "react";

function ComputerMonitor() {
    const [cpuUsage, setCpuUsage] = useState(0);
    const [memoryUsage, setMemoryUsage] = useState(0);
    const [internetSpeed, setInternetSpeed] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Generate random values within a reasonable range
        setCpuUsage(Math.floor(Math.random() * 100) + 1);
        setMemoryUsage(Math.floor(Math.random() * 100) + 1);
        setInternetSpeed(Math.floor(Math.random() * 1000) + 1);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="glitch-container">
      <p>&nbsp;CPU Usage:&nbsp;{cpuUsage}%</p>
      <p>&nbsp;Memory Usage:&nbsp;{memoryUsage}%</p>
      <p>&nbsp;Internet Speed:&nbsp;{internetSpeed}Mbps</p>
    </div>
  );
}

export default ComputerMonitor;