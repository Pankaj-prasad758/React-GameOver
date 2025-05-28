import React from 'react'
import { useState, useRef } from 'react';
function TrafficLight() {
     const [currentLight, setCurrentLight] = useState(null);
  const [time, setTime] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef(null);

  const lights = ["red", "yellow", "green"];

  const startTraffic = () => {
    if (isRunning) return;
    setIsRunning(true);
    runLights(0);
  };

  const stopTraffic = () => {
    setIsRunning(false);
    clearTimeout(timeoutRef.current);
    setCurrentLight(null);
  };

  const runLights = (index) => {
    setCurrentLight(lights[index]);

    timeoutRef.current = setTimeout(() => {
      if (!isRunning) return;
      const nextIndex = (index + 1) % lights.length;
      runLights(nextIndex);
    }, time);
  };

  const handleTimeChange = (e) => {
    setTime(Number(e.target.value));
  };
  return (
<>
  <div className="flex flex-col items-center space-y-6 p-6">
      <div className="flex flex-col space-y-4">
        <div className={`w-20 h-20 rounded-full ${currentLight === "red" ? "bg-red-500" : "bg-gray-300"}`}></div>
        <div className={`w-20 h-20 rounded-full ${currentLight === "yellow" ? "bg-yellow-500" : "bg-gray-300"}`}></div>
        <div className={`w-20 h-20 rounded-full ${currentLight === "green" ? "bg-green-500" : "bg-gray-300"}`}></div>
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={startTraffic} className="px-4 py-2 bg-green-600 text-white rounded">Start</button>
        <button onClick={stopTraffic} className="px-4 py-2 bg-red-600 text-white rounded">Stop</button>
        <input
          type="number"
          placeholder="Time in ms"
          value={time}
          onChange={handleTimeChange}
          className="px-2 py-1 border rounded"
        />
      </div>
    </div>
</>
  )
}

export default TrafficLight