"use client";
import { useEffect, useState } from "react";

export default function AnimatedNumber({ value, duration = 1200 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value.replace(/[^0-9]/g, ""));
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <span>
      {value.replace(/[0-9,.]+/, display.toLocaleString("en-IN"))}
    </span>
  );
}
