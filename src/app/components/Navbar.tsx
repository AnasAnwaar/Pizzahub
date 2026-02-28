import { Link } from "react-router";
import { ShoppingCart, Menu, X, Pizza } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartModal } from "./CartModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { getTotalItems } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Pizza className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-secondary">PizzaHub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-secondary" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              <Link
                to="/admin"
                className="hidden md:block px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all"
              >
                Admin Login
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-secondary" />
                ) : (
                  <Menu className="w-6 h-6 text-secondary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-2 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-foreground hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                className="block px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          )}
        </div>
      </nav>

      <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}
