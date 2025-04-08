const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$59.99',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$89.99',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Vintage Backpack',
      price: '$49.99',
      image: 'https://via.placeholder.com/200',
    },
  ];
  
  const FeaturedProducts = () => {
    return (
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-indigo-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;