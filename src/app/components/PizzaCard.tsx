import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

interface PizzaCardProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  badge?: string;
}

export function PizzaCard({
  id,
  name,
  description,
  price,
  image,
  badge,
}: PizzaCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
            {badge}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-secondary mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
