import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [restaurants, setrestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        
    //optional rendering
        setrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants);
        
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.
                infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

     if(onlineStatus === false) 
        return(
        <h1>Looks like you're offline. Check your internet connection.
        </h1>
        );

    return restaurants.length===0 ? <Shimmer /> :  (
        <div className="body">
            <div className="filter flex">

                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                       const filteredRestaurant = restaurants.filter(
                       (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                    );
                       
                       setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
            
            </div>

        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}
            >  
             {restaurant.info.isOpen ? ( 
             <RestaurantCardPromoted resData={restaurant}/>
              ) : ( 
             <RestaurantCard resData={restaurant}/>
            
            )}           
            </Link>
            ))};
        </div>
        </div>
    );
  };

export default Body;