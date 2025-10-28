import CategoryCard from "../CategoryCard.jsx";
import React from "react";

export default function Categories() {
  const categories = [
    {
      image: "/assets/design.svg",
      courses: 12,
      title: "Design",
      description:
        "Learn creative tools and principles to master modern design.",
    },
    {
      image: "/assets/dev.svg",
      courses: 18,
      title: "Development",
      description:
        "Master the latest programming skills and build powerful apps.",
    },
    {
      image: "/assets/marketing.svg",
      courses: 9,
      title: "Marketing",
      description:
        "Learn effective strategies to grow brands and engage audiences.",
    },
  ];

  return (
    <section className="py-20 md:px-12 lg:px-20 overflow-x-hidden bg-gradient-to-b from-white via-[#e1edfb]/10 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#e1edfb] to-[#064ea4]/10 text-[#064ea4] px-6 py-2 rounded-full text-sm font-semibold">
              Explore Categories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#064ea4] to-[#0f437f] bg-clip-text text-transparent">
              Browse Our Courses
            </span>
            <br />
            <span className="text-gray-900">By Category</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Choose from our diverse range of courses tailored to help you
            achieve your learning goals
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <button className="bg-gradient-to-r from-[#064ea4] to-[#0f437f] text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">
            View All Categories
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
