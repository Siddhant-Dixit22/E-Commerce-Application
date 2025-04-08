const categories = ['Electronics', 'Clothing', 'Accessories', 'Home Decor'];

const CategoryPreview = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <a
            key={index}
            href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            {cat}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryPreview;