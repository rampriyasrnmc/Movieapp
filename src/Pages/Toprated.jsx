import React, { useEffect, useState } from 'react';
import MovieList from '../Movie/MovieList';
import Loading from '../Movie/Loading';
import Error from '../Movie/Error';
import { fetchTopRated } from '../Api/tmdb';

function Toprated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopRated()
      .then(setMovies)
      .catch(() => setError('Failed to fetch top rated movies.'))
      .finally(() => setLoading(false));
  }, []);
   

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h2>Top Rated</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default Toprated;
