import "../styles/global.css";

const WorkValues = () => {
  const valuesData = [
    {
      id: "01",
      title: "Commitment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      image: "assets/commitment.svg",
    },
    {
      id: "02",
      title: "Accessibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      image: "assets/accessibility.svg",
    },
    {
      id: "03",
      title: "Openness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      image: "assets/openness.svg",
    },
    {
      id: "04",
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      image: "assets/innovation.svg",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[var(--Primary-2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container using flex column */}
        <div className="flex flex-col items-center justify-center">
          {/* First item - Header section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Our work values
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          {/* Second item - Grid system */}
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {valuesData.map((value) => (
                <div
                  key={value.id}
                  className="bg-white rounded-2xl p-6 lg:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Card header with icon and number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <img
                        src={value.image}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <span className="text-gray-400 text-lg font-medium">
                      {value.id}
                    </span>
                  </div>

                  {/* Card content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow positioned at bottom of section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img src="assets/arrow.svg" alt="" />
      </div>
    </section>
  );
};

export default WorkValues;
