import React, { useState } from "react";

function ListingCard({description, image, location}) {
  const [favorited, setFavorited] = useState(false)

  const onFavoriteClick = () => {
    setFavorited(() => !favorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
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
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
