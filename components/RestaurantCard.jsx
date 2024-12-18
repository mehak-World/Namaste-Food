const RestaurantCard = ({ data }) => {
    return (
      <div className="rest-card">
        {/* Correct the typo in cloudinaryImageId */}
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            data.cloudinaryImageId
          }
          width="270px"
          height="200px"
          className="rest-image"
          alt={data.name} // Add an alt tag for accessibility
        />
        <h6>{data.name}</h6>
        <p style={{ fontSize: "15px" }}>{data.cuisines.join(", ")}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              background: "green",
              color: "white",
              padding: "3px 8px",
              borderRadius: "8px",
            }}
          >
            {data.avgRating}{" "}
            <img
              height="20px"
              width="20px"
              src="https://static.vecteezy.com/system/resources/previews/023/258/446/non_2x/a-star-with-transparent-background-sticker-illustration-free-png.png"
              alt="star"
            />
          </div>
          <div
            style={{
              background: "#ff7700",
              color: "white",
              padding: "3px 8px",
              borderRadius: "8px",
            }}
          >
            Delivery in {data.sla.deliveryTime} mins
          </div>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;
  