import restaurant_data from "../utils/restaurant_data"
import RestaurantCard from "./RestaurantCard"

const Restaurants = () => {
    return (
        <div className = "restaurants">
            {restaurant_data.map((data) => {
                return (
                        <RestaurantCard data = {data}/>
                )
            })}
        </div>
    )
}

export default Restaurants;