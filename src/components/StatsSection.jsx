export default function StatsSection() {
  const statsData = [
    {
      number: "100,000+",
      title: "Students",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      number: "5,000+",
      title: "Five-star reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      number: "75,000+",
      title: "Students community",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
  ];

  return (
    <>
      <section className="py-20 sm:py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main container with flex column */}
          <div className="flex flex-col items-center justify-center">
            {/* Header text - centered */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                A few numbers that we
                <br />
                are proud of
              </h2>
            </div>

            {/* Stats grid - flex with space between */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-8 lg:gap-12 xl:gap-20">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center max-w-xs sm:max-w-sm w-full"
                >
                  {/* Number */}
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F99D77] mb-4">
                    {stat.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 mb-3">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
