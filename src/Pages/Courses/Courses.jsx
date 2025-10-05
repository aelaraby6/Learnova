import Footer from "../../components/Footer";

export default function Courses() {
  return (
    <>
      {/* Outer wrapper allows arrow to overflow */}
      <div className="relative overflow-visible">
        {/* Hero Section */}
        <div
          className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
          style={{ backgroundColor: "var(--Secondary-3)" }}
        >
          {/* Decorative circles */}
          <div
            className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] rounded-full
                       sm:w-[250px] sm:h-[250px] sm:bottom-[-120px] sm:left-[-120px]
                       md:w-[300px] md:h-[300px] md:bottom-[-150px] md:left-[-150px]
                       lg:w-[350px] lg:h-[350px] lg:bottom-[-180px] lg:left-[-180px]
                       xl:w-[450px] xl:h-[450px] xl:bottom-[-200px] xl:left-[-200px]
                       z-0"
            style={{ backgroundColor: "var(--circle-2)" }}
          ></div>

          <div
            className="absolute top-[-100px] right-[-100px] w-[200px] h-[200px] rounded-full
                       sm:w-[250px] sm:h-[250px] sm:top-[-120px] sm:right-[-120px]
                       md:w-[300px] md:h-[300px] md:top-[-150px] md:right-[-150px]
                       lg:w-[350px] lg:h-[350px] lg:top-[-180px] lg:right-[-180px]
                       xl:w-[450px] xl:h-[450px] xl:top-[-200px] xl:right-[-200px]
                       z-0"
            style={{ backgroundColor: "var(--circle-1)" }}
          ></div>

          {/* Hero Content */}
          <div className="relative z-10">
            <h1
              className="text-5xl md:text-6xl sm:text-3xl font-bold mb-[25px] mt-[50px]"
              style={{ color: "var(--Primary-2)" }}
            >
              Courses
            </h1>
            <p
              className="text-base sm:text-md max-w-md mx-auto px-2"
              style={{ color: "#97a3ae" }}
            >
              Explore our collection of courses designed to help you grow your
              skills.
            </p>
          </div>
        </div>

        {/* Arrow (half inside, half outside) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-65px] z-10">
          <img
            src="/assets/arrow-blue.svg"
            alt="Decorative arrow"
            className="w-12 sm:w-12 md:w-14 lg:w-16 opacity-90"
          />
        </div>
      </div>

      {/* Featured Course Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white mt-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--Primary-2)" }}
        >
          Featured Course
        </h2>

        {/* Card */}
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden 
  transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-[1.01] group"
        >
          {/* Course Image */}
          <div className="md:w-1/2 w-full relative overflow-hidden">
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-3 z-20">
              <div className="bg-white/90 text-[var(--Primary-2)] font-semibold px-4 py-2 rounded-full text-sm shadow-md">
                8hr 12m
              </div>
              <div
                className="bg-[var(--Primary-2)] text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md"
                style={{ backgroundColor: "var(--Primary-2)" }}
              >
                $199.00 USD
              </div>
            </div>

            {/* Image */}
            <img
              src="/assets/images/news-1.jpg"
              alt="Brand & Identity Design"
              className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Course Details */}
          <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "var(--Primary-2)" }}
            >
              Brand & Identity Design
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus vestibulum lorem sed risus ultricies. In cursus
              turpis massa tincidunt dui ut ornare lectus.
            </p>

            {/* Instructor */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/teacher-1.jpg"
                alt="Instructor"
                className="w-10 h-10 rounded-full"
              />
              <span
                className="font-medium"
                style={{ color: "var(--Primary-2)" }}
              >
                Kathie Corl
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
