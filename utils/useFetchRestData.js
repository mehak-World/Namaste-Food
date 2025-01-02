import {useState, useEffect} from "react";

const useFetchRestData = () => {

     const [restaurants, setRestaurants] = useState([]);
        const [allRestaurants, setAllRestaurants] = useState([]); 

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
  
    return {restaurants, allRestaurants, setRestaurants};
}

export default useFetchRestData
