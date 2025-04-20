import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utils/constants";

const RestaurantMenu = () => {

    const {resId} = useParams();

    console.log(resId);

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&query=Dosa&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
        console.log(json);
    };

    if (!resInfo) return <Shimmer />;

    // Extract restaurant information
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines } = restaurantInfo;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h2>Recommended Dishes</h2>
            <ul>
            {itemCards?.map((item) => (
                <li key={item.card.info.id}>
                {item.card.info.name} - {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;