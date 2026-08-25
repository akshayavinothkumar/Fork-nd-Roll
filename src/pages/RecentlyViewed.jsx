import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies.js";

function RecentlyViewed() {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]"
    );

    const viewedMovies = stored
      .map((id) => movies.find((movie) => movie.id === id))
      .filter(Boolean);

    setRecentMovies(viewedMovies);
  }, []);

  return (
    <section className="movies-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your History</p>
          <h1>Recently Viewed</h1>
        </div>
      </div>

      {recentMovies.length === 0 ? (
        <div className="empty-state">
          <h2>No recently viewed movies</h2>
          <p>
            Open a movie and it will appear here automatically.
          </p>

          <Link className="button" to="/">
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="movie-grid">
          {recentMovies.map((movie) => (
            <article className="movie-card" key={movie.id}>
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
              />

              <div className="movie-card-content">
                <div className="movie-card-meta">
                  <span>{movie.genre}</span>
                  <span>{movie.year}</span>
                </div>

                <h3>{movie.title}</h3>

                <p>{movie.description}</p>

                <div className="movie-card-footer">
                  <span className="rating">
                    ★ {movie.rating}
                  </span>

                  <Link
                    className="button button-small"
                    to={`/movies/${movie.id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentlyViewed;