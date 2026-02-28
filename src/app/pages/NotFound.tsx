import { Link } from "react-router";
import { Home, Pizza } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-red-600 to-secondary flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <Pizza className="w-20 h-20 text-white" />
        </div>
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
          Oops! Looks like this pizza got delivered to the wrong address.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
