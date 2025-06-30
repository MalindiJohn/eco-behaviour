import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomeLiveTips";
import Challenges from "./pages/Challenges";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

initializeApp(firebaseConfig);
getAuth();

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-gray-800">
        <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
          <div className="font-bold text-xl">EcoBehavior</div>
          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-1 w-6 bg-white rounded transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white rounded my-1 transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white rounded transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          {/* Desktop menu */}
          <div className="space-x-4 hidden md:flex">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/challenges" className="hover:underline">
              Challenges
            </Link>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/leaderboard" className="hover:underline">
              Leaderboard
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </div>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-green-700 text-white flex flex-col items-center space-y-4 py-4 z-50 md:hidden animate-fade-in">
              <Link
                to="/"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/challenges"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Challenges
              </Link>
              <Link
                to="/dashboard"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/leaderboard"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                to="/login"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
