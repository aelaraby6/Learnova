// CategoryCard.jsx
export default function CategoryCard({ image, courses, title, description }) {
  return (
    <div className="w-[350px] max-w-sm h-[460px] relative flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white transform transition-transform duration-500 hover:scale-105">
      {/* Courses badge */}
      {courses && (
        <span className="absolute top-4 right-4 bg-white/90 text-gray-900 text-sm font-medium px-3 py-1 rounded-full shadow flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[var(--Primary-2)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-4.197-2.44A1 1 0 009 9.528v4.944a1 1 0 001.555.832l4.197-2.44a1 1 0 000-1.664z"
            />
          </svg>
          {courses} Courses
        </span>
      )}

      {/* Image Section */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center bg-gray-100 rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-6 mt-5">
        <h3 className="text-xl font-bold text-gray-900 mb-5">{title}</h3>
        <p className="text-gray-500 mt-2 mb-2 text-sm">{description}</p>
      </div>
    </div>
  );
}