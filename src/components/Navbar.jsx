import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // --- DARK MODE LOGIC START ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage when the app first loads
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  // --- DARK MODE LOGIC END ---

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/?search=${encodeURIComponent(searchText.trim())}`);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <span className="logo-mark">C</span>
        <span>CineScope</span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "nav-content show" : "nav-content"}>
        <div className="nav-links">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/movies" onClick={() => setMenuOpen(false)}>
            Movies
          </NavLink>
          
          {/* DARK MODE TOGGLE BUTTON */}
          <button 
            onClick={toggleDarkMode} 
            className="theme-toggle-btn" 
            type="button"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <form className="nav-search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search movies"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}

export default Navbar;