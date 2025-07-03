import React from 'react';
import Moviecard from './Moviecard';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
