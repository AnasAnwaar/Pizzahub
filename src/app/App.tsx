import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <RouterProvider router={router} />
      </OrderProvider>
    </CartProvider>
  );
}
