import React from 'react';

function Searchbar({ value, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default Searchbar;
