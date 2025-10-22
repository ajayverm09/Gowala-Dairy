import React from "react";

const ProductList = () => {
  const products = [
    {
      title: "Gowala Ghee",
      price: 20,
      image: "https://labartisan.net/demo/gowala/assets/images/product/06.png",
    },
    {
      title: "Gowala Cheese",
      price: 30,
      image: "https://labartisan.net/demo/gowala/assets/images/product/07.png",
    },
    {
      title: "Gowala Butter",
      price: 10,
      image: "https://labartisan.net/demo/gowala/assets/images/product/08.png",
    },
    {
      title: "Gowala Cream",
      price: 20,
      image: "https://labartisan.net/demo/gowala/assets/images/product/09.png",
    },
  ];

  return (
    <div className="bg-gray-50 md:py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="relative inline-block mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-cover rounded-full border-2 border-[#7CBA30] mx-auto"
              />
              <span className="absolute top-0 right-0 bg-white group-hover:bg-[#7CBA30] group-hover:text-white border-2 border-[#7CBA30] text-[#7CBA30]  font-bold rounded-full h-10 w-10 flex items-center justify-center text-sm">
                ${product.price}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#7CBA30] mb-2">
              {product.title}
            </h3>
            <div className="text-yellow-500 text-lg">★★★★★</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#7CBA30] text-white hover:bg-white hover:text-[#7CBA30] border border-[#7CBA30] font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
          View All Product
        </button>
      </div>
    </div>
  );
};

export default ProductList;
