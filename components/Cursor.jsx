import React, { useState, useEffect } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="animated-cursor"
      style={{ left: position.x, top: position.y }}
    >
      <div className="cursor-pointer">
        <div className="cursor-body"></div>
        <div className="cursor-circuit"></div>
      </div>
    </div>
  );
};

export default AnimatedCursor;
