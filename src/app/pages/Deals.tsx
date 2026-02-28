import { useState, useEffect } from "react";
import { Clock, Tag, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface Deal {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  code: string;
  image: string;
  expiresIn: Date;
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Family Feast",
    description: "2 Large Pizzas + Garlic Bread + 2L Soda",
    originalPrice: 49.99,
    discountedPrice: 34.99,
    discount: "30% OFF",
    code: "FAMILY30",
    image: "https://images.unsplash.com/photo-1682989087146-70a0834c42c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaXp6YSUyMG1hcmdoZXJpdGF8ZW58MXx8fHwxNzcyMTQ3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    expiresIn: new Date("2026-03-07T23:59:59"),
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Any Large Pizza at Medium Price",
    originalPrice: 18.99,
    discountedPrice: 12.99,
    discount: "32% OFF",
    code: "WEEKEND",
    image: "https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyMjI5MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    expiresIn: new Date("2026-03-01T23:59:59"),
  },
  {
    id: 3,
    title: "Lunch Combo",
    description: "Personal Pizza + Drink",
    originalPrice: 12.99,
    discountedPrice: 7.99,
    discount: "38% OFF",
    code: "LUNCH50",
    image: "https://images.unsplash.com/photo-1635832801146-102d3bb7f88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzIxNTQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    expiresIn: new Date("2026-03-05T23:59:59"),
  },
  {
    id: 4,
    title: "Buy 1 Get 1",
    description: "Buy Any Large Pizza, Get Medium Free",
    originalPrice: 32.98,
    discountedPrice: 18.99,
    discount: "42% OFF",
    code: "BOGO",
    image: "https://images.unsplash.com/photo-1705286324371-d6a6d9519dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emF8ZW58MXx8fHwxNzcyMjU5NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    expiresIn: new Date("2026-03-10T23:59:59"),
  },
];

function CountdownTimer({ expiresIn }: { expiresIn: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiresIn.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [expiresIn]);

  return (
    <div className="flex gap-2">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white text-primary font-bold text-lg px-2 py-1 rounded">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs text-gray-600 mt-1 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}

export function Deals() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Exclusive Deals</h1>
          </div>
          <p className="text-xl text-white/90">
            Limited time offers! Grab them before they're gone!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
                🔥 HOT DEAL
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                50% OFF on First Order!
              </h2>
              <p className="text-xl mb-6 text-white/90">
                New customers get half-price on their first order. No minimum purchase required!
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white text-primary px-6 py-3 rounded-lg font-mono font-bold text-xl">
                  FIRST50
                </div>
                <button
                  onClick={() => copyCode("FIRST50")}
                  className="px-6 py-3 bg-accent hover:bg-opacity-90 rounded-lg font-bold transition-all"
                >
                  {copiedCode === "FIRST50" ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1678443316613-dbc3261c8b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGRlbGl2ZXJ5JTIwYm94fGVufDF8fHx8MTc3MjE5MDkzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pizza Delivery"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold text-secondary">{deal.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{deal.description}</p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-400 line-through text-lg">
                    ${deal.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    ${deal.discountedPrice.toFixed(2)}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600 font-semibold">Offer Ends In:</span>
                  </div>
                  <CountdownTimer expiresIn={deal.expiresIn} />
                </div>

                <div className="flex gap-3">
                  <div className="flex-1 bg-secondary text-white px-4 py-3 rounded-lg font-mono text-center font-bold">
                    {deal.code}
                  </div>
                  <button
                    onClick={() => copyCode(deal.code)}
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-bold"
                  >
                    {copiedCode === deal.code ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
