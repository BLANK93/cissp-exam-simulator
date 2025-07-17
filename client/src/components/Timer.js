import React, { useState, useEffect, useRef } from 'react';

function Timer({ startTime, duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration); // duration in milliseconds
  const timerRef = useRef(null);

  useEffect(() => {
    if (!startTime ||!duration) return;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const elapsed = now - new Date(startTime).getTime();
      const remaining = duration - elapsed;
      setTimeLeft(Math.max(0, remaining));

      if (remaining <= 0) {
        clearInterval(timerRef.current);
        if (onTimeUp) {
          onTimeUp();
        }
      }
    };

    timerRef.current = setInterval(calculateTimeLeft, 1000);

    // Initial calculation
    calculateTimeLeft();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  },);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
      `${String(hours).padStart(2, '0')}:` +
      `${String(minutes).padStart(2, '0')}:` +
      `${String(seconds).padStart(2, '0')}`
    );
  };

  return (
    <div className="timer">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
}

export default Timer;