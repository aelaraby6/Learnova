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
    <div className="group w-full h-full rounded-2xl shadow-md hover:shadow-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image Section with Overlay Effect */}
      <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 lg:h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Duration & Price Badges */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2">
          {duration && (
            <span className="backdrop-blur-md bg-white/95 text-gray-800 text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg border border-gray-100">
              {duration}
            </span>
          )}
          {price && (
            <span className="bg-blue-600 text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200">
              {price}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2 mb-3 sm:mb-4 flex-1">
          {description}
        </p>

        {/* Instructor Section */}
        <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="relative flex-shrink-0">
            <img
              src={instructorImage}
              alt={instructorName}
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-500 transition-colors duration-200"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base block truncate">
              {instructorName}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              Course Instructor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
