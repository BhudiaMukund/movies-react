import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
    
  return (
    <div className="search">
      <img src="search.svg" alt="Search" />
      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
