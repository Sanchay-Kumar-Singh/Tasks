import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Phone", category: "Electronics" },
  { id: 3, name: "Headphones", category: "Electronics" },
  { id: 4, name: "T-Shirt", category: "Clothing" },
  { id: 5, name: "Jeans", category: "Clothing" },
  { id: 6, name: "Pizza", category: "Food" },
  { id: 7, name: "Burger", category: "Food" },
];

const LiveSearch = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-[600px] bg-white border rounded-2xl p-6 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          🔍 Live Search & Filter
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 rounded-xl p-3 mb-4 outline-none focus:border-blue-500"
        />

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setCategory("All")}
            className="bg-gray-800 text-white px-4 py-2 rounded-xl"
          >
            All
          </button>

          <button
            onClick={() => setCategory("Electronics")}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          >
            Electronics
          </button>

          <button
            onClick={() => setCategory("Clothing")}
            className="bg-green-500 text-white px-4 py-2 rounded-xl"
          >
            Clothing
          </button>

          <button
            onClick={() => setCategory("Food")}
            className="bg-orange-500 text-white px-4 py-2 rounded-xl"
          >
            Food
          </button>
        </div>

        <div className="space-y-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border rounded-xl p-4"
              >
                <span className="font-semibold">
                  {product.name}
                </span>

                <span className="text-gray-500">
                  {product.category}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No products found 🔍
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default LiveSearch;