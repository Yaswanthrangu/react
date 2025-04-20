import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const restaurantCards = json?.data?.cards?.filter(
            (card) =>
                card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
        setListOfRestaurants(restaurantCards);
        setFilteredRestaurants(restaurantCards);
    }


    return (listOfRestaurants.length === 0) ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredList)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res?.card?.card?.info?.avgRating > 4.4);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link className="res-menu-link" to={"/restaurants/"+restaurant.card?.card?.info?.id} key={restaurant.card?.card?.info?.id}><RestaurantCard resData={restaurant}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;