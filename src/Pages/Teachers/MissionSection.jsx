import "../../styles/global.css";

export default function MissionSection() {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        {/* Yellow half circle top right */}
        <div
          className="absolute bg-[#fcdf69] rounded-full opacity-90 mission-hero-shape-1"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            top: "-320px",
            right: "-320px",
            width: "600px",
            height: "600px",
          }}
        ></div>

        {/* Orange half circle bottom left */}
        <div
          className="absolute bg-[#F99D77] rounded-full opacity-90 mission-hero-shape-2"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 95.3694px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            bottom: "-320px",
            left: "-320px",
            width: "600px",
            height: "600px",
          }}
        ></div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-10 lg:gap-20 xl:gap-32 w-full">
          {/* Left side - Mission text */}
          <div className="flex-1 text-left w-full lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-8">
              The big mission
              <br />
              behind Educationic
            </h1>
            <button className="bg-[var(--Primary-1)] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors">
              JOIN OUR TEAM
            </button>
          </div>

          {/* Right side - Description text */}
          <div className="flex-1 max-w-lg w-full lg:pl-8">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit
              tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.
            </p>
          </div>
        </div>
      </section>
      <div
        className="absolute left-0 right-0 flex justify-center"
        style={{ bottom: "-116px" }}
      >
        <img src="assets/arrow.svg" alt="" />
      </div>
    </>
  );
}
