import React, { useEffect, useState } from "react";
import anime from "animejs";

const MovingStars = () => {
  const [numStars] = useState(1000);

  useEffect(() => {
    anime({
      targets: ".star",
      translateX: () => anime.random(-1500, 1500),
      translateY: () => anime.random(-1500, 1500),
      opacity: [0.3, 1],
      easing: "linear",
      duration: 600,
      delay: anime.stagger(20),
      loop: true,
    });
  }, []);

  const randomSize = () => `${Math.random() * 2 + 1}px`;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(numStars)].map((_, i) => (
        <span
          key={i}
          className="star absolute bg-white rounded-full"
          style={{
            width: randomSize(),
            height: randomSize(),
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            filter: "drop-shadow(0 0 6px white)",
          }}
        />
      ))}
    </div>
  );
};

export default MovingStars;
