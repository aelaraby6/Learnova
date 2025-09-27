import "../../styles/global.css"

const FeaturedTeacher = () => {
    return(
      <div className="min-h-screen w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 my-12 sm:my-16 md:my-20"> 
        <div className="w-full lg:w-1/2 flex items-start flex-col gap-6 sm:gap-8 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[var(--Primary-1)] font-bold leading-tight">
              Courses taught by industry leaders around the world
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nemo?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                className="bg-[var(--Primary-1)] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-1)] focus:ring-opacity-50"
              >
                BROWSE TEACHERS
              </button>
              <button 
                className="border-2 border-[var(--Primary-1)] text-[var(--Primary-1)] py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold hover:bg-[var(--Primary-1)] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-1)] focus:ring-opacity-50"
              >
                BECOME A TEACHER
              </button>
            </div>
        </div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <img 
              src="assets/images/featured-teacher.jpg" 
              alt="Featured Teacher Sophie Moore teaching on the Learnova platform" 
              className="w-full h-auto max-h-[500px] sm:max-h-[600px] p-4 object-cover rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-300"
              loading="lazy"
            />
            <div
              className="absolute left-1/2 bottom-[-70px] sm:bottom-[-80px] md:bottom-[-90px] w-[90%] sm:w-3/4 md:w-1/2 bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-6 flex flex-col items-start justify-center -translate-x-1/2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ minWidth: '280px' }}
            >
                <p className="mb-3 sm:mb-6 bg-[var(--Secondary-1)] text-[var(--Primary-1)] rounded-full px-4 sm:px-5 pt-2 sm:pt-3 pb-1 sm:pb-2 text-xs sm:text-[14px] font-bold leading-[1.143em] inline-block">
                    Featured Teacher
                </p>
                <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight">
                  "Teaching on Learnova platform has been an amazing experience"
                </blockquote>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[var(--Primary-1)] mb-1">
                  Sophie Moore
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Marketing Lead at Agency
                </p>
            </div>
        </div>
      </div>
    )
}

export default FeaturedTeacher;