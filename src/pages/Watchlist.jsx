import React from "react";
import { Link } from "react-router-dom";
import MovieGrid from "../components/MovieGrid.jsx";
import { useWatchlist } from "../components/WatchlistContext.jsx";

function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <section className="watchlist-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your Collection</p>
          <h1>My Watchlist</h1>
        </div>
      </div>

      {watchlist.length === 0 ? (
        <div className="empty-state">
          <h3>Your watchlist is empty</h3>
          <p>Add movies to your watchlist and they will appear here.</p>

          <Link className="button" to="/movies">
            Explore Movies
          </Link>
        </div>
      ) : (
        <MovieGrid movies={watchlist} />
      )}
    </section>
  );
}

export default Watchlist;