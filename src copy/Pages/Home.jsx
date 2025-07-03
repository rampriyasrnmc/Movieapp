import React, { useEffect, useState } from 'react';
import { fetchNowPlaying } from '../Api/tmdb';
import MovieList from '../Movie/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchNowPlaying();
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
      <h1>Now Playing Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
