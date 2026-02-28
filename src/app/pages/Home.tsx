import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Search, Flame, Clock, Star, Award, Users } from "lucide-react";
import { PizzaCard } from "../components/PizzaCard";
import { OrderTracker } from "../components/OrderTracker";

const featuredPizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and fresh basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1682989087146-70a0834c42c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaXp6YSUyMG1hcmdoZXJpdGF8ZW58MXx8fHwxNzcyMTQ3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Loaded with pepperoni and extra cheese",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyMjI5MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Fresh vegetables with premium cheese",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1635832801146-102d3bb7f88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzIxNTQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, and ham",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1705286324371-d6a6d9519dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emF8ZW58MXx8fHwxNzcyMjU5NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Popular",
  },
];

const features = [
  {
    icon: Flame,
    title: "Fresh & Hot",
    description: "Delivered straight from the oven",
  },
  {
    icon: Clock,
    title: "30 Min Delivery",
    description: "Or it's free!",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients",
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Best pizza in town! Always fresh and delicious.",
    date: "Feb 20, 2026",
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment: "Fast delivery and amazing taste. Highly recommended!",
    date: "Feb 18, 2026",
  },
  {
    name: "Emily Davis",
    rating: 5,
    comment: "The Margherita is my favorite. Perfect every time!",
    date: "Feb 15, 2026",
  },
];

export function Home() {
  const [showTracker, setShowTracker] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-red-600 to-secondary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hot Fresh Pizza
                <br />
                Delivered Fast
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Authentic Italian taste with premium ingredients. Order now and enjoy the best pizza in town!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Order Now
                </Link>
                <button
                  onClick={() => setShowTracker(true)}
                  className="px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-opacity-90 transition-all border-2 border-white/20"
                >
                  Track Order
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1570377239782-d209a5915ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBpenphJTIwb3ZlbiUyMGJha2luZ3xlbnwxfHx8fDE3NzIyNzA0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fresh Pizza"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Featured Pizzas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handcrafted with love using the finest ingredients
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} {...pizza} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all shadow-lg"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Rated 4.9/5 from over 1,000 reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-secondary">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Tracker Modal */}
      {showTracker && <OrderTracker onClose={() => setShowTracker(false)} />}
    </div>
  );
}
