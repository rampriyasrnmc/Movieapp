import React, { useEffect, useState } from 'react';
import MovieList from '../Movie/MovieList';
import Loading from '../Movie/Loading';
import Error from '../Movie/Error';
import { fetchNowPlaying } from '../Api/tmdb';

function Nowplaying() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNowPlaying()
      .then(setMovies)
      .catch(() => setError('Failed to fetch now playing movies.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h2>Home</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default Nowplaying;
