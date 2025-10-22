import React from "react";

const badges = [
  "https://labartisan.net/demo/gowala/assets/images/sponsor/01.png",
  "https://labartisan.net/demo/gowala/assets/images/sponsor/02.png",
  "https://labartisan.net/demo/gowala/assets/images/sponsor/03.png",
  "https://labartisan.net/demo/gowala/assets/images/sponsor/04.png",
  "https://labartisan.net/demo/gowala/assets/images/sponsor/05.png",
];

const BadgeRow = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 md:gap-12">
        {badges.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Badge ${idx + 1}`}
            className="md:h-36 h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeRow;
