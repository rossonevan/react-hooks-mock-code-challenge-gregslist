import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState('');
  const [listings, setListings] = useState([]);

  useEffect( () => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))

  }, []) 
    
  function deleteListing (id) {
    const updatedListing = listings.filter(
      listing => listing.id !== id
    )
    setListings(updatedListing)
  }

  const searchListings = listings.filter( listing => {
      return listing.description.toLowerCase().includes(search.toLowerCase())
    })

  console.log(searchListings)
  
  return (
    <div className="app">
      <Header search={ search } setSearch={ setSearch } />
      <ListingsContainer listings={searchListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
