import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid.jsx";
import movies from "../data/movies.js";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const sortOrder = searchParams.get("sort") || "";
  const featuredMovie = movies.find((movie) => movie.featured) || movies[0];

  const filteredMovies = movies
  .filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
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

    if (value.trim() === "") {
      setSearchParams({});
      return;
    }

    setSearchParams({ search: value });
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
        <img src={featuredMovie.poster} alt={`${featuredMovie.title} poster`} />
      </section>

      <section className="section-heading" id="movies">
        <div>
          <p className="eyebrow">Movie Collection</p>
          <h2>Explore Movies</h2>
        </div>
        <label className="movie-search">
          <span>Search by title</span>
          <input
            type="search"
            placeholder="Try Orbit Cafe"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </label><label className="movie-search">
  <span>Sort by rating</span>
  <select
    value={sortOrder}
    onChange={(event) => {
      const value = event.target.value;

      setSearchParams({
        ...(searchTerm && { search: searchTerm }),
        ...(value && { sort: value }),
      });
    }}
  >
    <option value="">Default</option>
    <option value="high">Rating: High → Low</option>
    <option value="low">Rating: Low → High</option>
  </select>
</label>
      </section>

      <MovieGrid movies={filteredMovies} />
    </>
  );
}

export default Home;
