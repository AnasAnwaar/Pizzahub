import { X, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { createOrder } = useOrders();
  const [step, setStep] = useState<"form" | "success">("form");
  const [orderId, setOrderId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Credit Card",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = createOrder({
      customerName: formData.name,
      phone: formData.phone,
      address: formData.address,
      items: cart,
      totalAmount: getTotalPrice(),
      paymentMethod: formData.paymentMethod,
      paymentStatus: formData.paymentMethod === "Credit Card" ? "Paid" : "Pending",
    });
    setOrderId(newOrderId);
    setStep("success");
    clearCart();
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      name: "",
      phone: "",
      address: "",
      paymentMethod: "Credit Card",
    });
    setOrderId("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h2 className="text-xl font-bold text-secondary">
            {step === "form" ? "Checkout" : "Order Confirmed"}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Delivery Address</label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={3}
                  placeholder="123 Main St, Apt 4B"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Payment Method</label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMethod: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </div>

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-xl font-bold text-primary">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Place Order
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for your order. Your delicious pizza is being prepared!
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-1">Your Order ID</p>
                <p className="text-xl font-bold text-primary">{orderId}</p>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                You can track your order from the home page using this Order ID.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
