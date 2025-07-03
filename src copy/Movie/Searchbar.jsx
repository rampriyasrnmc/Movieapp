export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar-text"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button className="search-button" onClick={onSearch}>Search</button>
    </div>
  );
}