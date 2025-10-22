import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      title: 'Basic',
      price: '29',
      features: [
        'Integer commodo massa',
        'Nam siewet amet leoing maximus',
        'Dignism elit eu viverra elit',
        'Nam siewet amet leoing maximus',
      ],
    },
    {
      title: 'Standard',
      price: '49',
      features: [
        'Integer commodo massa',
        'Nam siewet amet leoing maximus',
        'Dignism elit eu viverra elit',
        'Nam siewet amet leoing maximus',
      ],
    },
    {
      title: 'Premium',
      price: '99',
      features: [
        'Integer commodo massa',
        'Nam siewet amet leoing maximus',
        'Dignism elit eu viverra elit',
        'Nam siewet amet leoing maximus',
      ],
    },
  ];

  const PricingCard = ({ title, price, features }) => {
    return (
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-4xl text-[#7CBA30] font-bold mb-1">${price}</p>
        <p className="text-sm font-semibold mb-4">Monthly</p>
        <p className="text-gray-600 mb-6">
          Quisque viverra elit sit amet hendrerit Sed libero vitae metus
        </p>
        <ul className="text-gray-700 space-y-4 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="pt-3">{feature}</li>
          ))}
        </ul>
        <button className="bg-[#7CBA30] border border-[#7CBA30] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-white hover:text-[#7CBA30] transition">
          Buy Now
        </button>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        backgroundImage: 'url(https://labartisan.net/demo/gowala/assets/css/bg-images/06.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {plans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;