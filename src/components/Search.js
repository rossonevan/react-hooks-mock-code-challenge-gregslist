import React from "react";

function Search({ search, setSearch }) {
  return (
    <form className="searchbar" >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
