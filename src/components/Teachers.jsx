import React from "react";

const Teachers = () => {
  const teachersData = [
    {
      id: 1,
      name: "John Carter",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit.",
      image: "/assets/images/teacher-1.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 2,
      name: "Sophie Moore",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit.",
      image: "/assets/images/teacher-2.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 3,
      name: "Matt Cannon",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit.",
      image: "/assets/images/teacher-3.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 4,
      name: "Kathie Corl",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit.",
      image: "/assets/images/teacher-4.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 5,
      name: "Mike Warren",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit.",
      image: "/assets/images/teacher-5.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 6,
      name: "Andy Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit.",
      image: "/assets/images/teacher-6.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container using flex column */}
        <div className="flex flex-col items-center justify-center">
          {/* First item - Header section */}
          <div className="w-full mb-12 lg:mb-16">
            {/* Header with title and button using flex space-between */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
              {/* Left side - Title and description */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Our teachers
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                  Presenting Academy, the tech school of the future. We teach
                  you the right skills to be prepared for tomorrow.
                </p>
              </div>

              {/* Right side - Button */}
              <div className="flex-shrink-0">
                <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors">
                  BECOME A TEACHER
                </button>
              </div>
            </div>
          </div>

          {/* Second item - Teachers grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {teachersData.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Teacher image */}
                  <div className="w-full h-[348px] overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Teacher info */}
                  <div className="p-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                      {teacher.description}
                    </p>

                    {/* Social links */}
                    <div className="flex space-x-3">
                      <a
                        href={teacher.socialLinks.linkedin}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
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
                        href={teacher.socialLinks.twitter}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
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
                        href={teacher.socialLinks.facebook}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
