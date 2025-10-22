import React from 'react';
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const ContactFooter = () => {
  return (
    <section
      className="bg-cover bg-center md:h-screen bg-no-repeat min-h-[60vh] py-16 px-6 text-gray-800"
      style={{
        backgroundImage:
          'url("https://labartisan.net/demo/gowala/assets/css/bg-images/footer-bg.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto md:px-20 -mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <img
            src="https://labartisan.net/demo/gowala/assets/images/logo/01.png"
            alt="Gowala Logo"
            className="w-40 mb-4"
          />
          <p>
            Continually productize compelling quality dome packed with all Elated Themes
            ently utilize website and creating pages corporate
          </p>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-2">
              <PhoneIcon className="w-5 h-5 text-[#7CBA30] flex-shrink-0 mt-0.5" />
              <span>
                +88130-589-745-6987 <br />
                +1655-456-523
              </span>
            </p>
            <p className="flex items-start gap-2">
              <ClockIcon className="w-5 h-5 text-[#7CBA30] flex-shrink-0 mt-0.5" />
              <span>
                Mon - Fri 09:00 - 18:00 <br />
                (except public holidays)
              </span>
            </p>
            <p className="flex items-start gap-2">
              <MapPinIcon className="w-5 h-5 text-[#7CBA30] flex-shrink-0 mt-0.5" />
              <span>
                25/2 Lane2 Vokte Street Building <br /> Melborn City
              </span>
            </p>
          </div>
        </div>

        {/* Top Selling Products */}
        <div>
          <h2 className="text-xl font-bold mb-4">Top Selling Product</h2>
          <div className="space-y-4">
            {[
              {
                name: 'Gowala Cream',
                image:
                  'https://labartisan.net/demo/gowala/assets/images/footer/01.jpg',
              },
              {
                name: 'Gowala Butter',
                image:
                  'https://labartisan.net/demo/gowala/assets/images/footer/02.jpg',
              },
              {
                name: 'Gowala Cheese',
                image:
                  'https://labartisan.net/demo/gowala/assets/images/footer/03.jpg',
              },
            ].map((product, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded shadow"
                />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-yellow-400 text-sm">⭐⭐⭐⭐½ (Review 3)</p>
                  <p>
                    <span className="line-through text-sm text-gray-300">$45.99</span>{' '}
                    <span className="font-bold text-white">$25.99</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Farm Gallery */}
        <div>
          <h2 className="text-xl font-bold mb-4">Farm Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              'https://labartisan.net/demo/gowala/assets/images/footer/gellary/01.jpg',
              'https://labartisan.net/demo/gowala/assets/images/footer/gellary/02.jpg',
              'https://labartisan.net/demo/gowala/assets/images/footer/gellary/03.jpg',
              'https://labartisan.net/demo/gowala/assets/images/footer/gellary/04.jpg',
              'https://labartisan.net/demo/gowala/assets/images/footer/gellary/05.jpg',
              'https://labartisan.net/demo/gowala/assets/images/footer/gellary/06.jpg',
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Farm ${i + 1}`}
                className="w-full h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
