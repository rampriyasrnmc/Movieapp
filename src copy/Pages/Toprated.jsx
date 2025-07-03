import React, { useEffect, useState } from 'react';
import { fetchTopRated } from '../Api/tmdb';
import MovieList from '../Movie/MovieList';

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchTopRated();
      setMovies(fetchedMovies);
      setLoading(false);
    };

    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRated;
