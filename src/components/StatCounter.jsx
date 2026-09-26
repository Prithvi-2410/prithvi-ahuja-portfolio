import React, { useState, useEffect } from 'react';

export default function StatCounter({ endValue, isDecimal = false, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const target = parseFloat(endValue);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, duration]);

  if (isDecimal) {
    return <span>{count.toFixed(1)}</span>;
  }

  return <span>{Math.floor(count)}</span>;
}
