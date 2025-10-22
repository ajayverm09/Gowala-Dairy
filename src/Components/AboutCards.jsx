// CardComponent.jsx
import React from 'react';

const cards = [
  {
    id: 1,
    title: "Farm Technological Leader",
    description: "Continually productize compelling quality for packed with all Elated Themes. Setting up to website and creating pages.",
    image: "https://labartisan.net/demo/gowala/assets/images/about/01.png", // Replace with your image or use imports
  },
  {
    id: 2,
    title: "Nature Milk For Making Ghee",
    description: "Continually productize compelling quality for packed with all Elated Themes. Setting up to website and creating pages.",
    image: "https://labartisan.net/demo/gowala/assets/images/about/02.png",
    highlight: true, // This card shows the default hover effect
  },
  {
    id: 3,
    title: "3 days Convenient Delivery System",
    description: "Continually productize compelling quality for packed with all Elated Themes. Setting up to website and creating pages.",
    image: "https://labartisan.net/demo/gowala/assets/images/about/03.png",
  },
];

const AboutCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:px-30 gap-8 p-8 bg-white">
      {cards.map((card) => (
        <div
          key={card.id}
          className="group bg-white p-6 text-center rounded-md shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full md:w-1/3 cursor-pointer"
        >
          <img
            src={card.image}
            alt={card.title}
            className="mx-auto mb-4 h-28 object-contain"
          />
          <h3
            className={`text-xl font-bold mb-2 transition-colors duration-300 ${
              card.highlight
                ? "group-hover:text-[#AFC645] text-gray-900"
                : "group-hover:text-[#AFC645] text-gray-900"
            }`}
          >
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;