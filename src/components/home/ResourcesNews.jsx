import "../../styles/global.css";

const ResourcesNews = () => {
  const mainArticle = {
    id: 1,
    image: "/public/assets/images/news-1.jpg",
    category: "Design",
    date: "September 1, 2022",
    title: "How to design a simple, yet unique and memorable brand identity",
  };

  const sideArticles = [
    {
      id: 2,
      image: "/public/assets/images/news-2.jpeg",
      title: "5 marketing trends that you should be prepared for in 2022",
    },
    {
      id: 3,
      image: "/public/assets/images/news-3.jpeg",
      title:
        "How to be more creative: 5 cool tips to find inspiration everywhere",
    },
    {
      id: 4,
      image: "/public/assets/images/news-4.jpeg",
      title: "19 ways to optimize your ad marketing budget efficiently",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with flex and space-between */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--Primary-1)]">
            Resources & News
          </h2>
          <button className="bg-slate-200 hover:bg-slate-300 px-8 py-3 rounded-full text-slate-700 font-medium transition-colors duration-200">
            BROWSE BLOG
          </button>
        </div>

        {/* Main Grid Layout */}
        <div className="flex gap-12 items-stretch">
          {/* Left Side - Main Article (1 element) */}
          <div className="flex-1">
            <div className="h-full flex flex-col space-y-6">
              {/* Photo on top */}
              <div className="relative">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="w-full h-80 object-cover rounded-lg shadow-sm"
                />
                <span className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 flex items-center shadow-sm">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                  {mainArticle.category}
                </span>
              </div>

              {/* Text content on bottom */}
              <div className="space-y-3">
                <p className="text-slate-500 text-sm font-medium">
                  {mainArticle.date}
                </p>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                  {mainArticle.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side - Split into 3 articles */}
          <div className="w-96 flex flex-col justify-between">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="flex gap-6 group cursor-pointer py-2"
              >
                {/* Photo on left */}
                <div className="flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-32 h-24 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200"
                  />
                </div>

                {/* Text on right */}
                <div className="flex-1 flex items-center">
                  <h4 className="text-xl font-semibold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesNews;
