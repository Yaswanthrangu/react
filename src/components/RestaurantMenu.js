import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;

    // Extract restaurant information
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines } = restaurantInfo;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="menu">
            <h1 className="p-4 m-2 text-2xl text-center">{name}</h1>
            <h3 className="p-2 text-xl text-center">{cuisines?.join(", ")}</h3>
            <h2 className="p-4 text-lg">Recommended Dishes</h2>
            <ul>
            {itemCards?.map((item) => (
                <li key={item.card.info.id} className="px-4">
                {item.card.info.name} - {(item.card.info.price || item.card.info.defaultPrice) / 100}.00
                </li>
            ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;