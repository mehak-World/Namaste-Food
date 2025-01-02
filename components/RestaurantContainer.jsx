import RestaurantCard, {promotedRestCard} from "./RestaurantCard"
import {Link} from "react-router-dom"

const Restaurants = ({restaurants}) => {
    const PromotedCard = promotedRestCard(RestaurantCard);
    return (
        <div className = "restaurants">
            {restaurants.map((data) => {
                let url = "/restaurants/" + data.card.card.info.id
                    {console.log(data)}
                return data?.card?.card?.info?.promoted ? <PromotedCard data = {data.card.card.info} /> : (
                
                        <Link to = {url} key = {data.card.card.info.id} style = {{textDecoration: "none", color: "black"}}>
                            <RestaurantCard key = {data.name} data = {data.card.card.info}/>
                        </Link>
                )
            })}
        </div>
    )
}

export default Restaurants;