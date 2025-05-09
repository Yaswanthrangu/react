import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }
    
    return (
        <div className="w-6/12 shadow-lg bg-gray-50 mx-auto my-4 p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-medium text-lg">{data.title} - ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>  
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}


export default RestaurantCategory;