import "../../styles/global.css";

const LearnCourse = () => {
  return (
    <section className="bg-[var(--Primary-2)] min-h-screen w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center text-white flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center justify-center">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto">
        Why learn with our courses?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full max-w-7xl mx-auto px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16">
        <LearnCourseBenefits
          imgSrc={"assets/learn_course_1.svg"}
          title={"1. Learn"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptas!"
          }
        />
        <LearnCourseBenefits
          imgSrc={"assets/graduate_course_2.svg"}
          title={"2. Graduate"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptas!"
          }
        />
        <LearnCourseBenefits
          imgSrc={"assets/work_course_3.svg"}
          title={"3. work"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptas!"
          }
        />
      </div>
      <div
        className="absolute left-0 right-0 flex justify-center"
        style={{ bottom: "-116px" }}
      >
        <img src="assets/arrow.svg" alt="" />
      </div>
    </section>
  );
};

const LearnCourseBenefits = ({ imgSrc, title, description }) => {
  return (
    <div className="text-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105 hover:shadow-2xl focus-within:ring-2 focus-within:ring-white/30">
      <div className="relative group">
        <img
          className="mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 object-contain w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 transition-transform duration-300 group-hover:scale-110"
          src={imgSrc}
          alt={title}
          loading="lazy"
        />
      </div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
};

export default LearnCourse;
