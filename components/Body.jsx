import React, { useState, useEffect } from "react";
import Search from "./Search";
import Restaurants from "./RestaurantContainer";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchMsg, setSearchMsg] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const rest_data = await fetch(
                    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=30.7333148&lng=76.7794179&str=North%20Indian&trackingId=11a1e23c-6066-4d4f-68c7-b52b4db5cd9f&submitAction=ENTER&queryUniqueId=5c468ec8-e34a-99a3-af1e-7baa67be350d"
                );
                const response = await rest_data.json();
                const restaurantsData = response?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards.slice(0, 20) || [];
                setRestaurants(restaurantsData);
                setAllRestaurants(restaurantsData);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };
        getData();
    }, []);

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
                
                <Restaurants restaurants={restaurants} />
            </div>
        </div>
    );
};

export default Body;
