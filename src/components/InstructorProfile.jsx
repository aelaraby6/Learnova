import React from "react";
import { useParams } from "react-router-dom";
import { teachersData } from "../data/teachersData";
import "../styles/global.css";

const InstructorProfile = () => {
  const { instructorId } = useParams();

  // Find instructor from shared data
  const instructor = teachersData.find(
    (teacher) => teacher.id === parseInt(instructorId)
  );

  if (!instructor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Instructor not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue header section */}
      <div className="bg-[var(--Primary-2)] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            {/* First item - Instructor card */}
            <div className="bg-white rounded-2xl p-6 lg:p-12 shadow-xl max-w-4xl w-full">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                {/* Left - Instructor image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-blue-100">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right - Instructor details */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div>
                      <h1 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                        {instructor.name}
                      </h1>
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {instructor.title}
                      </span>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-md">
                        {instructor.description}
                      </p>
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center lg:justify-start space-x-3">
                      <a
                        href={instructor.socialLinks.linkedin}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-blue-600"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
                        </svg>
                      </a>
                      <a
                        href={instructor.socialLinks.twitter}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-blue-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.988A4.107 4.107 0 0015.448 4c-2.266 0-4.104 1.828-4.104 4.084 0 .32.036.634.106.934C7.728 8.924 4.1 7.13 1.671 4.149a4.072 4.072 0 00-.555 2.052c0 1.42.724 2.675 1.823 3.413a4.093 4.093 0 01-1.857-.513v.052c0 1.984 1.417 3.637 3.292 4.017a4.1 4.1 0 01-1.853.07c.522 1.623 2.037 2.804 3.833 2.836A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                      <a
                        href={instructor.socialLinks.facebook}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-blue-600"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="18" cy="6" r="1" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White content section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            {/* Second item - About section */}
            <div className="w-full mb-12 lg:mb-16">
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center">
                About {instructor.name}
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                {instructor.about}
              </p>
            </div>

            {/* Third item - Courses section */}
            <div className="w-full">
              {/* Header with title and button */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
                  {instructor.name} Courses
                </h2>
                <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                  BROWSE ALL COURSES
                </button>
              </div>

              {/* Courses content */}
              <div className="bg-gray-50 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
                {instructor.courses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {instructor.courses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-lg p-6 shadow-sm"
                      >
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-lg">No items found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
