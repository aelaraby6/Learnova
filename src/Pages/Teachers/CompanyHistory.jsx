import { useState, useEffect } from "react";

const CompanyHistory = () => {
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {
      year: "2023",
      title: "Launched course #500",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit. Felis donec massa aliquam id dolor.",
    },
    {
      year: "2022",
      title: "Reached 100 team members",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit. Felis donec massa aliquam id dolor.",
    },
    {
      year: "2021",
      title: "Launched first course",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit. Felis donec massa aliquam id dolor.",
    },
    {
      year: "2020",
      title: "Education founded",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorii adipiscing elit. Felis donec massa aliquam id dolor.",
    },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const timelineItems = document.querySelectorAll(".timeline-item");
          const viewportHeight = window.innerHeight;

          if (timelineItems.length === 0) {
            ticking = false;
            return;
          }

          // Find which item is closest to the center of the viewport
          let closestIndex = 0;
          let closestDistance = Infinity;

          timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            const viewportCenter = viewportHeight / 2;
            const distance = Math.abs(itemCenter - viewportCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          setActiveItem(closestIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call to set the active item
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start">
          {/* First item - Sticky/Fixed left section */}
          <div className="lg:w-1/2 lg:sticky lg:top-20">
            <div className="lg:pr-12 mb-12 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Our company history
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Presenting Academy, the tech school of the future. We teach you
                the right skills to be prepared for tomorrow.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors">
                JOIN OUR TEAM
              </button>
            </div>
          </div>

          {/* Second item - Timeline */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`timeline-item relative pl-12 transition-all duration-500 ${
                      activeItem === index
                        ? "opacity-100 scale-105"
                        : "opacity-20 scale-95"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full border-4 border-white shadow-lg transition-colors duration-300 ${
                        activeItem === index ? "bg-orange-400" : "bg-gray-300"
                      }`}
                    ></div>

                    {/* Year */}
                    <div className="text-right mb-4">
                      <span className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm text-lg font-semibold text-gray-700">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
