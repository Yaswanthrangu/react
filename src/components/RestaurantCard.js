import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.card?.card?.info;
    return (
        <div className="w-[190px] m-1 p-2 bg-[#f0f0f0] hover:border hover:border-black hover:cursor-pointer flex flex-col justify-between h-[310px]">
            <img className="w-full h-[120px] object-cover" alt="restaurant" src={CDN_URL + cloudinaryImageId} />
            <div className="flex flex-col justify-between flex-grow mt-2">
                <h3 className="font-semibold text-base truncate">{name}</h3>
                <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
                <h4 className="text-sm">{avgRating} stars</h4>
                <h4 className="text-sm">{resData.card.card.info.sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
    return(props) => {
        return(
            <div>
                <label className="absolute bg-black text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>   
        )
    }
}