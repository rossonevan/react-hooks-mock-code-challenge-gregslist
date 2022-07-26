import React, { useState } from "react";

function Search({ search, setSearch }) {
  const [formData, setFormData] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(formData);
  }

  console.log(formData)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ formData }
        onChange={ (e) => setFormData(e.target.value) }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
