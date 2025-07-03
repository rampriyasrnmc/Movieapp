import React, { useState } from 'react';
import { fetchSearchResults } from '../Api/tmdb';
import MovieList from '../Movie/MovieList';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query.trim() !== '') {
      setLoading(true);
      const fetchedMovies = await fetchSearchResults(query);
      setMovies(fetchedMovies);
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Search;
