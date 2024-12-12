

const RestaurantCard = ({data}) => {
    return(
       <div className = "rest-card">
            <img src = {data.image_url} width = "270px" height = "200px" className = "rest-image" />
            <h6>{data.name}</h6>
            <p style = {{fontSize: "15px"}}>{data.description}</p>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
                <div style = {{background: "green", color: "white", padding: " 3px 8px", borderRadius: "8px"}}>{data.rating} <img height = "20px" width = "20px" src = "https://static.vecteezy.com/system/resources/previews/023/258/446/non_2x/a-star-with-transparent-background-sticker-illustration-free-png.png" /></div>
                <div style = {{background: "#ff7700", color: "white", padding: " 3px 8px", borderRadius: "8px"}}> Delivery in {data.deliveryTime}</div>
            </div>
           
       </div>
)

}

export default RestaurantCard