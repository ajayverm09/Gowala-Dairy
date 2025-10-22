import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const data = [
    {
      id: 1,
      image: "https://labartisan.net/demo/gowala/assets/images/blog/13.jpg",
      admin: "Rajib Ahmed",
      date: "24 December 2021",
      title: "The Only Ice Cream Recipe You'll Ever Need",
    },
    {
      id: 2,
      image: "https://labartisan.net/demo/gowala/assets/images/blog/14.jpg",
      admin: "Rajib Raj",
      date: "24 December 2021",
      title: "Tips for Making Dairy Free Milk At Home",
    },
    {
      id: 3,
      image: "https://labartisan.net/demo/gowala/assets/images/blog/15.jpg",
      admin: "Rajib Ahmed",
      date: "24 December 2021",
      title: "Tips for Making Dairy Free Milk At Home",
    },
  ];

  return (
    <div className=" md:pb-20 bg-gray-100 p-3 md:p-6">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item) => (
          <Link 
            key={item.id} 
            to={`/blog/${item.id}`}
            className="block"
          >
            <div className="bg-white group rounded shadow p-4 h-full cursor-pointer hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full group-hover:scale-105 transition transform h-64 object-cover rounded"
              />
              <div className="mt-4 text-sm text-gray-600">
                <span className="mr-2">
                  Admin :{" "}
                  <span className="text-[#7CBA30] font-medium">{item.admin}</span>
                </span>
                <span>
                  Date :{" "}
                  <span className="text-[#7CBA30] font-medium">{item.date}</span>
                </span>
              </div>
              <h2 className="mt-2 text-xl font-bold group-hover:text-[#7CBA30] text-gray-800">{item.title}</h2>
              <p className="mt-2 text-gray-600 text-md">
                Qnteate Supple Chan Though Marke Poston Best Supple Chan Though
                Marke Poston Bestng Pract Practces eractive Fashion Fashion
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;