import React from "react"
import Search from "./Search";
import Restaurants from "./RestaurantContainer";

// Inside the body component, we will have the search bar, and the rest container where all the restaurant cards will be there

const Body = () => {
    return (
        <div className = "body">
            <div className = "search">
                <Search />
            </div>
            <div className = "restaurant-container">
                <Restaurants />
            </div>
        </div>
    )
}

export default Body;