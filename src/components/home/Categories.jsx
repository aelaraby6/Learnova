import CategoryCard from "../CategoryCard.jsx";

export default function Categories() {
  return (
    <section className="py-16 md:px-12 lg:px-20 overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--Primary-2)] text-center mb-12">
        Browse our courses by category
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <CategoryCard
          image="/assets/design.svg"
          courses={12}
          title="Design"
          description="Learn creative tools and principles to master modern design."
        />
        <CategoryCard
          image="/assets/dev.svg"
          courses={18}
          title="Development"
          description="Master the latest programming skills and build powerful apps."
        />
        <CategoryCard
          image="/assets/marketing.svg"
          courses={9}
          title="Marketing"
          description="Learn effective strategies to grow brands and engage audiences."
        />
      </div>
    </section>
  );
}
