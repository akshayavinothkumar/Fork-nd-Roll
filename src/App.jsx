import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ThemeProvider from "./components/ThemeContext.jsx";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;