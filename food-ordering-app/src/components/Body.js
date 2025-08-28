import { useState, useEffect } from "react";
import RestaurantCard from "./Restaurants/RestaurantCard";
import ShimmerCard from "./Shimmer/ShimmerCard";
import useRestaurants from "../Hooks/useRestaurants";

const Body = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const [showTopRated, setShowTopRated] = useState(false);
    const {restaurants, loading} = useRestaurants();  //Destructing 
    //Filter restaurants 
    const filteredRestaurants = restaurants.filter((restaurant)=>
        restaurant.resName.toLowerCase().includes(searchQuery.toLowerCase()));

    const displayRestaurants = showTopRated 
        ? filteredRestaurants.filter((restaurant)=> parseFloat(restaurant.rating)>=4.5)
        : filteredRestaurants;

    const handleShowTopRated = () =>{
        setShowTopRated(true);
    };

    const handleResetFilters = () =>{
        setShowTopRated(false);
        setSearchQuery('');
    };
    

    return (
           <div className="body">
            {/* Search Input */}
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search for Restaurants..."
                    value={searchQuery}
                    onChange={(e)=>{
                        setSearchQuery(e.target.value)
                        setShowTopRated(false); //Reset top-rated 
                    }}
                />
                <button onClick={handleShowTopRated}> Show Top Rated</button>
                <button onClick={handleResetFilters}> Reset</button>
            </div>
   {/* Show shimmer placeholders while loading */}
   {loading ? (
        <div className="rest-cards">
          {Array.from({ length: 10 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div className="rest-cards">
          {displayRestaurants.map((restaurant) => (
            <RestaurantCard
              id={restaurant.id}
              key={restaurant.id}
              resName={restaurant.resName}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              eta={restaurant.eta}
              image={restaurant.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;