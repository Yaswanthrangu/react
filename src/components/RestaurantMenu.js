import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;

    // Extract restaurant information
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines } = restaurantInfo;
    

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    

    return (
        <div className="text-center">
            <h1 className="font-bold p-4 text-2xl">{name}</h1>
            <h3 className="text-xl">{cuisines?.join(", ")}</h3>
            {categories.map((category, index) => (
                <RestaurantCategory 
                key={category?.card?.card?.categoryId} 
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;