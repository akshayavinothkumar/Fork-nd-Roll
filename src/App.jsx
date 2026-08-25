import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import RecentlyViewed from "./pages/RecentlyViewed.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route
            path="/recently-viewed"
            element={<RecentlyViewed />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;