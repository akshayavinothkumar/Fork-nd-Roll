import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid.jsx";
import movies from "../data/movies.js";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const sortOrder = searchParams.get("sort") || "none";

  const featuredMovie = movies.find((movie) => movie.featured) || movies[0];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === "high") {
      return b.rating - a.rating;
    }

    if (sortOrder === "low") {
      return a.rating - b.rating;
    }

    return 0;
  });

  function handleSearchChange(event) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", value);
    }

    setSearchParams(params);
  }

  function handleSortChange(event) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value === "none") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    setSearchParams(params);
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Featured Movie</p>
          <h1>{featuredMovie.title}</h1>
          <p className="hero-description">{featuredMovie.description}</p>

          <div className="hero-details">
            <span>{featuredMovie.genre}</span>
            <span>★ {featuredMovie.rating}</span>
          </div>

          <Link className="button" to={`/movies/${featuredMovie.id}`}>
            View Details
          </Link>
        </div>

        <img
          src={featuredMovie.poster}
          alt={`${featuredMovie.title} poster`}
        />
      </section>

      <section className="section-heading" id="movies">
        <div>
          <p className="eyebrow">Movie Collection</p>
          <h2>Explore Movies</h2>
        </div>

        <div className="movie-controls">
          <label className="movie-search">
            <span>Search by title</span>
            <input
              type="search"
              placeholder="Try Orbit Cafe"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </label>

          <label className="sort-filter">
            <span>Sort by rating</span>
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="none">Default order</option>
              <option value="high">Highest → Lowest</option>
              <option value="low">Lowest → Highest</option>
            </select>
          </label>
        </div>
      </section>

      <MovieGrid movies={sortedMovies} />
    </>
  );
}

export default Home;