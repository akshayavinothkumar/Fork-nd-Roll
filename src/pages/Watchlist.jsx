import React, { useEffect, useState } from "react";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist when page opens
  useEffect(() => {
    const savedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );

    setWatchlist(savedWatchlist);
  }, []);

  // Remove a movie from watchlist
  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter(
      (movie) => String(movie.id) !== String(movieId)
    );

    setWatchlist(updatedWatchlist);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updatedWatchlist)
    );
  };

  return (
    <section className="page-container">
      <div className="page-header">
        <p className="section-label">YOUR COLLECTION</p>
        <h1>My Watchlist ({watchlist.length})</h1>
        <p>
          Movies you have saved to watch later.
        </p>
      </div>

      {watchlist.length === 0 ? (
        <div className="empty-state">
          <h2>Your watchlist is empty</h2>
          <p>
            Add movies to your watchlist and they will appear here.
          </p>
        </div>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <article className="watchlist-card" key={movie.id}>
              <div className="watchlist-poster">
                {movie.poster ? (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                  />
                ) : (
                  <div className="poster-placeholder">
                    No Poster
                  </div>
                )}
              </div>

              <div className="watchlist-content">
                <div className="movie-tags">
                  {movie.genre && (
                    <span>{movie.genre}</span>
                  )}

                  {movie.year && (
                    <span>{movie.year}</span>
                  )}
                </div>

                <h2>{movie.title}</h2>

                {movie.description && (
                  <p>{movie.description}</p>
                )}

                {movie.rating && (
                  <div className="movie-rating">
                    ★ {movie.rating}
                  </div>
                )}

                <button
                  className="remove-button"
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Watchlist;