import "../../styles/global.css"

const HeroStats = () => {
  return (
    <section className="bg-[var(--Primary-2)] min-h-screen w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full transform -translate-x-32 -translate-y-32 opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 rounded-full transform translate-x-40 translate-y-40 opacity-80"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-300 rounded-full opacity-30"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20">

        <div className="flex-1 max-w-2xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
            Grow your career today with
            the Educationic courses
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          
            <button 
                className="bg-[var(--Secondary-1)] text-[var(--Primary-1)] py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-1)] focus:ring-opacity-50"
            >
            EXPLORE COURSES
            </button>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-8 items-center max-w-2xl">
            <div className="flex flex-col gap-6">
              <StatCard
                value="9/10"
                description="Overall courses satisfaction score"
                bgColor="bg-white"
                textColor="text-gray-800"
              />
              <StatCard
                value="96%"
                description="Completion rate on all courses"
                bgColor="bg-white"
                textColor="text-gray-800"
              />
            </div>
            
            <div>
              <StatCard
                value="10K+"
                description="Happy students worldwide"
                bgColor="bg-white"
                textColor="text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, description, bgColor, textColor }) => {
  return (
    <div 
      className={`${bgColor} ${textColor} p-14 rounded-2xl shadow-2xl w-64 transform hover:scale-105 transition-transform duration-300`}
    >
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          {value}
        </div>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default HeroStats;