import React from "react"
import Search from "./Search";
import Restaurants from "./RestaurantContainer";
import restaurant_data from "../utils/restaurant_data"
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer"

// Inside the body component, we will have the search bar, and the rest container where all the restaurant cards will be there

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let rest_data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=30.7333148&lng=76.7794179&str=North%20Indian&trackingId=11a1e23c-6066-4d4f-68c7-b52b4db5cd9f&submitAction=ENTER&queryUniqueId=5c468ec8-e34a-99a3-af1e-7baa67be350d");
           response = await rest_data.json()
            setRestaurants(response?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards.slice(0, 20));
            console.log(restaurants)
        }
    
        getData()
    }, [])
    

   
    const handleBtnClick = ()  => {
        const filtered_rests = restaurants.filter((rest) => rest.card.card.info.avgRating >= 4.3);
        console.log(filtered_rests)
        setRestaurants(filtered_rests);
    }


    return restaurants.length == 0 ? <Shimmer /> : (
        <div className = "body">
            <div className = "search">
            <div className="mb-3 filter">
          <button type="button" className="btn btn-secondary" onClick = {handleBtnClick}>
              Top-Rated Restaurants
          </button>
        </div>
                <Search />
            </div>
            <div className = "restaurant-container">
                <Restaurants restaurants = {restaurants}/>
            </div>
        </div>
    )
}

export default Body;