import React, { useState } from 'react';
import Searchbar from '../Movie/Searchbar';
import MovieList from '../Movie/MovieList';
import Loading from '../Movie/Loading';
import Error from '../Movie/Error';
import { fetchSearchResults } from '../Api/tmdb';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    fetchSearchResults(query)
      .then(setMovies)
      .catch(() => setError('Failed to fetch search results.'))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Searchbar value={query} onChange={(e) => setQuery(e.target.value)} onSearch={handleSearch} />
      {loading && <Loading />}
      {error && <Error message={error} />}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default Search;
