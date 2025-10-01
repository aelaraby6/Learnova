import "../styles/global.css";

export default function StudentCard({
  image,
  title,
  career,
  studentName,
}) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg pt-[90px] px-[56px] pb-[86px] transform transition-transform duration-500 hover:scale-105">
      <div className="flex items-center gap-8">
        {/* Student Image - Left Side */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100">
            <img 
              src={image} 
              alt={studentName} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="flex-1">
          {/* Star Rating */}
          <div className="flex mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="mb-4">
            <p className="text-gray-600 text-base leading-relaxed italic">
              "{title}"
            </p>
          </div>

          {/* Student Info */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              {studentName}
            </h3>
            <p className="text-gray-500 text-sm">
              {career}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
