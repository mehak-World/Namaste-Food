import RestaurantCard from "./RestaurantCard"

const Restaurants = ({restaurants}) => {
    return (
        <div className = "restaurants">
            {restaurants.map((data) => {
                return (
                        <RestaurantCard key = {data.name} data = {data.card.card.info}/>
                )
            })}
        </div>
    )
}

export default Restaurants;