export default function AboutEducation() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[var(--Primary-2)] mb-3">
          About Education
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We provide high-quality learning experiences that prepare students
          with the knowledge and skills they need to succeed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/About-Edu.jpg"
            alt="Education meeting"
            className="rounded-2xl shadow-lg max-w-md"
          />
        </div>

        {/* Features */}
        <div className="space-y-13">
          <div className="flex items-start gap-5">
            <div className="p-4 bg-blue-100 rounded-full flex items-center justify-center">
              <img
                src="/assets/industry.svg"
                alt="briefcase"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Industry expert teachers
              </h3>
              <p className="text-gray-500 text-sm">
                Learn from experienced instructors with real-world expertise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-blue-100 rounded-full flex items-center justify-center">
              <img
                src="/assets/refresh.svg"
                alt="refresh"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Up-to-date course content
              </h3>
              <p className="text-gray-500 text-sm">
                Courses updated regularly to match industry trends.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-blue-100 rounded-full flex items-center justify-center">
              <img
                src="/assets/community.svg"
                alt="users"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Students community
              </h3>
              <p className="text-gray-500 text-sm">
                Join a vibrant community of learners and collaborators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          className="px-8 py-3 rounded-full bg-blue-100 text-[var(--Primary-2)] font-medium 
          transform transition-all duration-300 hover:bg-gray-300 hover:scale-95 active:scale-90"
        >
          ABOUT EDUCATION
        </button>
      </div>
    </section>
  );
}
