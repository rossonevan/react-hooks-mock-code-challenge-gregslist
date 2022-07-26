import React, { useState } from "react";

function ListingCard({listing, deleteListing}) {
  const [favorited, setFavorited] = useState(false)

  const onFavoriteClick = () => {
    setFavorited(() => !favorited)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
  })
    .then(res => res.json())
    .then(() => console.log('deleted'))
    deleteListing(listing.id)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            className="emoji-button favorite active"
            onClick={ onFavoriteClick }
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={ onFavoriteClick }
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
        className="emoji-button delete"
        onClick={handleDelete}
        >
          🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
