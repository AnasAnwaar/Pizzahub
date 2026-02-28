import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "./CartContext";

export type OrderStatus = "Preparing" | "Baking" | "Out for Delivery" | "Delivered";

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: "Pending" | "Paid";
  createdAt: Date;
}

interface OrderContextType {
  orders: Order[];
  createOrder: (orderData: Omit<Order, "id" | "status" | "createdAt">) => string;
  getOrderById: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  deleteOrder: (id: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([
    // Mock initial orders for demo
    {
      id: "ORD-2026-001",
      customerName: "John Smith",
      phone: "+1 234 567 8900",
      address: "123 Main St, New York, NY 10001",
      items: [
        { id: 1, name: "Margherita Pizza", price: 12.99, image: "", quantity: 2 },
        { id: 2, name: "Pepperoni Pizza", price: 14.99, image: "", quantity: 1 },
      ],
      totalAmount: 40.97,
      status: "Baking",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      createdAt: new Date("2026-02-28T10:30:00"),
    },
    {
      id: "ORD-2026-002",
      customerName: "Emma Johnson",
      phone: "+1 234 567 8901",
      address: "456 Oak Ave, Brooklyn, NY 11201",
      items: [
        { id: 3, name: "Veggie Supreme", price: 13.99, image: "", quantity: 1 },
      ],
      totalAmount: 13.99,
      status: "Out for Delivery",
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Pending",
      createdAt: new Date("2026-02-28T11:15:00"),
    },
  ]);

  const createOrder = (orderData: Omit<Order, "id" | "status" | "createdAt">) => {
    const orderId = `ORD-${new Date().getFullYear()}-${String(orders.length + 3).padStart(3, "0")}`;
    const newOrder: Order = {
      ...orderData,
      id: orderId,
      status: "Preparing",
      createdAt: new Date(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    return orderId;
  };

  const getOrderById = (id: string) => {
    return orders.find((order) => order.id === id);
  };

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  const deleteOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        updateOrderStatus,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
}
