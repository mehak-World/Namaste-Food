import React, { useState, useEffect } from "react";
import useFetchRestData from "../utils/useFetchRestData";

const ResHeader = ({ id }) => {
  const { allRestaurants } = useFetchRestData(); // Fetch restaurant data
  const [filteredData, setFilteredData] = useState(null); // Initialize as null

  useEffect(() => {
    // Run this effect whenever `id` or `allRestaurants` changes
    if (allRestaurants.length > 0) { // Ensure data is loaded
      const afterFilter = allRestaurants.filter(
        (rest) => rest?.card?.card?.info?.id === id
      );
      console.log("Filtered Data: ", afterFilter);

      if (afterFilter.length > 0) {
        setFilteredData(afterFilter[0].card.card.info);
      } else {
        setFilteredData(null); // Reset if no match is found
      }
    }
  }, [id, allRestaurants]); // Dependencies: id and allRestaurants

  if (!filteredData) {
    return <p>Loading restaurant details...</p>; // Loading or no data fallback
  }

  return (
    <div style = {{display: "flex", gap: "5%"}}>
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            filteredData.cloudinaryImageId
          }
          width="150px"
          height="150px"
          className="rest-image"
          alt={filteredData.name} // Add alt tag for accessibility
        />
      </div>
      <div>
        <p style = {{fontWeight: "bold"}}>{filteredData.name}</p>
        <p style={{ fontSize: "15px", color: "darkgreen"}}>
          {filteredData.cuisines ? filteredData.cuisines.join(", ") : "N/A"}
        </p>
        <p style = {{color: "darkorange", fontWeight: "bold"}}>Delivery in {filteredData.sla?.deliveryTime || "N/A"} mins</p>
      </div>
    </div>
  );
};

export default ResHeader;
