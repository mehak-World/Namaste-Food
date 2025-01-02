import React, { useState, useEffect } from "react";
import Search from "./Search";
import Restaurants from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import useFetchRestData from "../utils/useFetchRestData";

const Body = () => {
    const [searchMsg, setSearchMsg] = useState("")
    const {restaurants, allRestaurants, setRestaurants} = useFetchRestData();
    console.log("All Restaurants: ", allRestaurants);

    const handleBtnClick = () => {
        const filtered_rests = allRestaurants.filter(
            (rest) => rest.card.card.info.avgRating && rest.card.card.info.avgRating >= 4.3
        );
        setRestaurants(filtered_rests);
    };

    const resetFilters = () => {
        setRestaurants(allRestaurants);
    };

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search">
                <button type="button" className="btn btn-secondary" onClick={handleBtnClick}>
                    Top-Rated Restaurants
                </button>
                <button type="button" className="btn btn-light" onClick={resetFilters}>
                    Reset Filters
                </button>
                <Search allRestaurants={allRestaurants} setRestaurants={setRestaurants} setSearchMessage={setSearchMsg}/>
            </div>
            <div className="restaurant-container">
                {searchMsg ? 
                <div class = "search-msg" style = {{display: "flex", justifyContent: "space-between"}}>
                    <div>{searchMsg} </div> 
                    <div>
                        <button style = {{border: "none", background: "none"}} onClick = {() => setSearchMsg("")}><i class="fa-solid fa-x" style = {{color: "white"}}></i></button>
                     </div>
                </div>: 
                <div></div> }
                
                <Restaurants restaurants = {restaurants} />
            </div>
        </div>
    );
};

export default Body;
