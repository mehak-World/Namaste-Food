import { useState } from "react";
import Fuse from "fuse.js";

const Search = ({ allRestaurants, setRestaurants, setSearchMessage }) => {
  const [searchText, setSearchText] = useState("");

  // Set up Fuse.js options for fuzzy search
  const fuse = new Fuse(allRestaurants, {
    keys: ["card.card.info.name", "card.card.info.cuisines" ], // Specify the field to search
    threshold: 0.4, // Lower value = stricter matching
  });

  const handleInputChange = (e) => {
    setSearchMessage("")
    const input = e.target.value;
    console.log("Input: " , input)
    console.log("Search text: ", searchText)
    setSearchText(input);
    console.log("Search text: ", searchText)

    if (input != "") {
      // Perform fuzzy search
      const results = fuse.search(input);
      console.log(results);

      if(results.length == 0){
        setSearchMessage("No match found")
        setRestaurants(allRestaurants)
      }


      // Extract and set filtered results
      else{
        const filteredRestaurants = results.map((result) => result.item);
        console.log(filteredRestaurants);
        setRestaurants(filteredRestaurants);
      }
     
    }

    else{
      setRestaurants(allRestaurants)
    }
  };

  return (
    <div className="mb-3 search">
      <input
        type="text"
        className="form-control"
        id="search-bar"
        placeholder="Search Restaurant"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
