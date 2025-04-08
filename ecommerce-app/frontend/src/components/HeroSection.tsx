const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-600 to-purple-500 text-white py-20 px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Discover Your Next Favorite Thing
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Shop trending products across categories with unbeatable prices and fast delivery.
      </p>
      <a
        href="/products"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
      >
        Shop Now
      </a>
    </section>
  );
};

export default HeroSection;
