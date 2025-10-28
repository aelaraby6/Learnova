import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function CategoryCard({ image, courses, title, description }) {
  return (
    <>
      <style>{`
        .category-card {
          border-color: var(--Secondary-3);
        }
        .category-card:hover {
          border-color: var(--Primary-1);
        }
        .category-gradient-bg {
          background: linear-gradient(135deg, var(--Secondary-1) 0%, var(--Secondary-3) 50%, var(--Primary-1) 100%);
          opacity: 0;
        }
        .category-card:hover .category-gradient-bg {
          opacity: 0.15;
        }
        .category-circle {
          background-color: var(--Primary-1);
          opacity: 0.05;
        }
        .category-card:hover .category-circle {
          opacity: 0.1;
        }
        .category-icon-box {
          background: linear-gradient(135deg, var(--Secondary-1) 0%, var(--Secondary-3) 100%);
        }
        .category-sparkle {
          color: var(--Primary-1);
          fill: var(--Primary-1);
        }
        .category-badge {
          background-color: var(--Secondary-1);
          color: var(--Primary-1);
        }
        .category-card:hover .category-badge {
          background-color: var(--Primary-1);
          color: white;
        }
        .category-card:hover .category-title {
          color: var(--Primary-1);
        }
        .category-cta {
          color: var(--Primary-1);
        }
      `}</style>
      
      <div className="category-card group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="category-gradient-bg absolute inset-0 transition-all duration-500 pointer-events-none" />
        
        {/* Decorative Circle */}
        <div className="category-circle absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500" />
        
        <div className="relative z-10">
          {/* Icon Container */}
          <div className="mb-6 relative">
            <div className="category-icon-box w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <img 
                src={image} 
                alt={title}
                className="w-10 h-10 object-contain"
              />
            </div>
            {/* Sparkle Effect */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Sparkles className="category-sparkle w-5 h-5" />
            </div>
          </div>

          {/* Course Count Badge */}
          <div className="category-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-sm font-semibold transition-all duration-300">
            <BookOpen className="w-4 h-4" />
            <span>{courses} Courses</span>
          </div>

          {/* Title */}
          <h3 className="category-title text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {description}
          </p>

          {/* CTA Link */}
          <button className="category-cta inline-flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300">
            <span>Explore Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </>
  );
}