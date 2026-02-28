import { X, Check } from "lucide-react";
import { useState } from "react";
import { useOrders, OrderStatus } from "../context/OrderContext";

interface OrderTrackerProps {
  onClose: () => void;
}

const statusSteps: OrderStatus[] = ["Preparing", "Baking", "Out for Delivery", "Delivered"];

export function OrderTracker({ onClose }: OrderTrackerProps) {
  const [orderId, setOrderId] = useState("");
  const [searchedOrder, setSearchedOrder] = useState<ReturnType<typeof useOrders>["getOrderById"]>();
  const { getOrderById } = useOrders();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const order = getOrderById(orderId);
    setSearchedOrder(order);
  };

  const getStatusIndex = (status: OrderStatus) => {
    return statusSteps.indexOf(status);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Track Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleTrack} className="mb-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g., ORD-2026-001)"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all shadow-lg"
              >
                Track
              </button>
            </div>
          </form>

          {searchedOrder ? (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-bold text-secondary">{searchedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Customer Name</p>
                    <p className="font-bold text-secondary">{searchedOrder.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="font-bold text-primary">${searchedOrder.totalAmount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Status</p>
                    <p className={`font-bold ${searchedOrder.paymentStatus === "Paid" ? "text-green-600" : "text-orange-600"}`}>
                      {searchedOrder.paymentStatus}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-secondary mb-4">Order Status</h3>
                <div className="space-y-4">
                  {statusSteps.map((step, index) => {
                    const currentIndex = getStatusIndex(searchedOrder.status);
                    const isCompleted = index <= currentIndex;
                    const isCurrent = index === currentIndex;

                    return (
                      <div key={step} className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            isCompleted
                              ? "bg-primary text-white shadow-lg"
                              : "bg-gray-200 text-gray-400"
                          } ${isCurrent ? "ring-4 ring-primary/30" : ""}`}
                        >
                          {isCompleted && <Check className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-bold ${
                              isCompleted ? "text-secondary" : "text-gray-400"
                            }`}
                          >
                            {step}
                          </p>
                          {isCurrent && (
                            <p className="text-sm text-primary">In Progress...</p>
                          )}
                        </div>
                        {index < statusSteps.length - 1 && (
                          <div
                            className={`absolute left-6 w-0.5 h-8 mt-12 ${
                              index < currentIndex ? "bg-primary" : "bg-gray-200"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-bold text-secondary mb-2">Order Items</h4>
                <ul className="space-y-2">
                  {searchedOrder.items.map((item) => (
                    <li key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : orderId && searchedOrder === undefined ? (
            <div className="text-center py-8">
              <p className="text-red-500 font-semibold">
                Order not found. Please check your Order ID.
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Enter your Order ID to track your pizza</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
