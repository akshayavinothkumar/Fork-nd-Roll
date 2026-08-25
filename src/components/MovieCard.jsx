import React from "react";
import { Link } from "react-router-dom";
import { useWatchlist } from "./WatchlistContext.jsx";

function MovieCard({ movie }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } =
    useWatchlist();

  const saved = isInWatchlist(movie.id);

  function handleWatchlistClick() {
    if (saved) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  }

  return (
    <article className="movie-card">
      <img src={movie.poster} alt={`${movie.title} poster`} />

      <div className="movie-card-content">
        <div className="movie-card-meta">
          <span>{movie.genre}</span>
          <span>{movie.year}</span>
        </div>

        <h3>{movie.title}</h3>

        <p>{movie.description}</p>

        <div className="movie-card-footer">
          <span className="rating">★ {movie.rating}</span>

          <Link className="button button-small" to={`/movies/${movie.id}`}>
            View Details
          </Link>
        </div>

        <button
          className="watchlist-button"
          type="button"
          onClick={handleWatchlistClick}
        >
          {saved ? "✓ Remove from Watchlist" : "+ Add to Watchlist"}
        </button>
      </div>
    </article>
  );
}

export default MovieCard;