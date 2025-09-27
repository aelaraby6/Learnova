export default function CourseCard({
  image,
  duration,
  price,
  title,
  description,
  instructorName,
  instructorImage,
}) {
  return (
    <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-white transform transition-transform duration-500 hover:scale-105">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />

        {/* Time & Price container */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {duration && (
            <span className="bg-white/90 text-gray-900 text-sm font-medium px-3 py-1 rounded-full shadow">
              {duration}
            </span>
          )}
          {price && (
            <span className="bg-[var(--Primary-1)] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
              {price}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 mt-2 mb-2 text-sm">{description}</p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={instructorImage}
            alt={instructorName}
            className="w-10 h-10 rounded-full border"
          />
          <span className="font-medium text-gray-900">{instructorName}</span>
        </div>
      </div>
    </div>
  );
}
