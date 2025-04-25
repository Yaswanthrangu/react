import {CDN_URL} from "../utils/constants"

const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex">
                    <div className="w-9/12">
                        <div>
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price ?  item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            </div>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="p-2 bg-green-400 shadow-lg">Add +</button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} className="w-full" onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://pngimg.com/d/square_PNG63.png";
                        }}/>
                    </div>   
                </div>
            ))}
        </div>
    )
}

export default ItemList;