import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {resData} = props;
  const{loggedInUser} = useContext(UserContext)

const { 
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
} =  resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img className="w-[250px] h-[200px] rounded-lg"
                    alt="logo"
                    src={
                        CDN_URL
                        + cloudinaryImageId} />
                <h4 className="font-bold py-4 text-lg">{name}</h4>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>User: {loggedInUser}</h4>
    
                
            </div>
    );
};


//higher order function 

// input restaurantcard => Promoted label

export const withPromotedLabel = () => {
    return(props) => {
        return(
            <div>
                <label className="absolute bg-gray-600 text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;