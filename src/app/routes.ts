import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Deals } from "./pages/Deals";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "deals", Component: Deals },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, Component: AdminLogin },
      { path: "dashboard", Component: AdminDashboard },
    ],
  },
]);
