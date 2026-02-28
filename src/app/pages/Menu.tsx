import { useState } from "react";
import { PizzaCard } from "../components/PizzaCard";
import { Filter } from "lucide-react";

const allPizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and fresh basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1682989087146-70a0834c42c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaXp6YSUyMG1hcmdoZXJpdGF8ZW58MXx8fHwxNzcyMTQ3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Loaded with pepperoni and extra cheese",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyMjI5MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Vegetarian",
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Fresh vegetables with premium cheese",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1635832801146-102d3bb7f88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzIxNTQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, and ham",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1705286324371-d6a6d9519dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emF8ZW58MXx8fHwxNzcyMjU5NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Vegetarian",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    description: "Grilled chicken with BBQ sauce and red onions",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjBjaGlja2VuJTIwcGl6emF8ZW58MXx8fHwxNzcyMjA3OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Vegetarian",
  },
  {
    id: 6,
    name: "Hawaiian Pizza",
    description: "Ham, pineapple, and mozzarella",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1671572579989-fa11cbd86eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXdhaWlhbiUyMHBpenphJTIwcGluZWFwcGxlfGVufDF8fHx8MTc3MjI1NDk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Vegetarian",
  },
];

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 20]);

  const filteredPizzas = allPizzas.filter((pizza) => {
    const categoryMatch = selectedCategory === "All" || pizza.category === selectedCategory;
    const priceMatch = pizza.price >= priceRange[0] && pizza.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-white/90">
            Explore our delicious selection of handcrafted pizzas
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-secondary">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Category</label>
                  <div className="space-y-2">
                    {["All", "Vegetarian", "Non-Vegetarian"].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange([0, 20]);
                  }}
                  className="w-full py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Pizza Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredPizzas.length} of {allPizzas.length} pizzas
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPizzas.map((pizza) => (
                <PizzaCard key={pizza.id} {...pizza} />
              ))}
            </div>
            {filteredPizzas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No pizzas found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
