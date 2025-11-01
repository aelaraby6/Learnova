export default function AboutMissionSection() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          {/* First Grid - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12">
            {/* Left Image */}
            <div className="flex-1 max-w-[552px] w-full">
              <img
                src="/assets/images/mission-1.jpg"
                alt="Education workspace"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1 max-w-lg w-full lg:pl-12 mt-8 lg:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                The mission behind Education platform
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                viverra praesent felis consequat pellentesque turpis et quisque
                platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
                Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
                euismod laoreet urna, feugiat at. Euismod sem purus rutrum in.
                Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
                iaculis netus gravida.
              </p>
            </div>
          </div>

          {/* Second Grid - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 lg:gap-8 xl:gap-12 mt-8 lg:mt-0">
            {/* Right Image */}
            <div className="flex-1 max-w-[552px] w-full">
              <img
                src="/assets/images/mission-2.jpg"
                alt="Student working"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Left Text */}
            <div className="flex-1 max-w-lg w-full lg:pr-12 mt-8 lg:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                The story of our founders
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                viverra praesent felis consequat pellentesque turpis et quisque
                platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
                Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
                euismod laoreet urna, feugiat at. Euismod sem purus rutrum in.
                Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
                iaculis netus gravida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
