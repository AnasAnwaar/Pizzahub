import { motion } from "motion/react";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

const team = [
  {
    name: "Marco Rossi",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1710575334971-da2dcc228cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3MjI3MDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sofia Martinez",
    role: "Pizza Artisan",
    image: "https://images.unsplash.com/photo-1710575334971-da2dcc228cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3MjI3MDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Antonio Ferretti",
    role: "Master Baker",
    image: "https://images.unsplash.com/photo-1710575334971-da2dcc228cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3MjI3MDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const timeline = [
  { year: "2010", event: "PizzaHub Founded", description: "Started with a small kitchen and big dreams" },
  { year: "2015", event: "10,000+ Happy Customers", description: "Expanded to 5 locations across the city" },
  { year: "2020", event: "Award Winning Pizza", description: "Won Best Pizza Restaurant of the Year" },
  { year: "2026", event: "Going National", description: "Opening 20 new locations this year" },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every pizza we make",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Only the finest ingredients make it into our kitchen",
  },
  {
    icon: Users,
    title: "Community",
    description: "Serving our community with pride and dedication",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Always improving and creating new delicious recipes",
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From a small family kitchen to the city's favorite pizza destination
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Crafted with Love Since 2010
              </h2>
              <p className="text-gray-700 mb-4">
                PizzaHub began as a dream of bringing authentic Italian pizza to our community. 
                With recipes passed down through generations and a commitment to quality, 
                we've been serving happiness one slice at a time.
              </p>
              <p className="text-gray-700 mb-4">
                Every pizza is handcrafted with care, using locally sourced ingredients and 
                traditional techniques. Our wood-fired ovens ensure that perfect crispy crust 
                that our customers have come to love.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be a part of countless family dinners, celebrations, 
                and everyday moments. Thank you for making us your pizza destination!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1722587561829-8a53e1935e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MjIyMTY2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant Interior"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Values
            </h2>
            <p className="text-gray-600">What makes PizzaHub special</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600">The talented people behind your favorite pizzas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600">Milestones that shaped PizzaHub</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-center">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
