
const JobCategories = () => {
  const categories = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return (
    <div>
      <div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-Secondary mb-2">
          Job Categories
        </h1>
        <p className="text-center text-xs md:text-base text-Slate/70 font-medium">
          Discover By Categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 flex-wrap my-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="space-y-2 bg-BgPrimary/20 shadow-md p-3 hover:bg-Secondary duration-300 rounded-lg"
          >
            <h1 className="text-base md:text-lg text-Primary font-semibold">
              Category Title
            </h1>
            <p className="text-xs md:text-base text-Slate/70 font-semibold">
              Job Post: <span className="text-Red">112</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
