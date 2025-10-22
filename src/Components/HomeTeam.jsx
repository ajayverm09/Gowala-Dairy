import React from "react";
import { Twitter, Camera, Briefcase, PenTool } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Smith",
    role: "Co Founder",
    img: "https://labartisan.net/demo/gowala/assets/images/team/01.jpg",
  },
  {
    name: "Laura Smith",
    role: "Co Founder",
    img: "https://labartisan.net/demo/gowala/assets/images/team/02.jpg",
  },
  {
    name: "William Smith",
    role: "Co Founder",
    img: "https://labartisan.net/demo/gowala/assets/images/team/03.jpg",
  },
  {
    name: "Mark Wood",
    role: "Co Founder",
    img: "https://labartisan.net/demo/gowala/assets/images/team/04.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-md overflow-hidden text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 group-hover:scale-105 transform transition object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl group-hover:text-[#7CBA30] font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500 mb-4">{member.role}</p>

                <div className="flex justify-center space-x-4 group-hover:text-[#7CBA30] text-gray-700">
                  <a href="#" className="hover:text-blue-500 transition">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-purple-500 transition">
                    <PenTool size={20} /> {/* Behance alternative */}
                  </a>
                  <a href="#" className="hover:text-pink-500 transition">
                    <Camera size={20} /> {/* Instagram alternative */}
                  </a>
                  <a href="#" className="hover:text-blue-700 transition">
                    <Briefcase size={20} /> {/* LinkedIn alternative */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
