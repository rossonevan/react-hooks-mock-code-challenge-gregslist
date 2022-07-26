import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {
  console.log(listings)
  
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return <ListingCard 
          key={listing.id}
          listing={listing}
          deleteListing={deleteListing}
          />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
