import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart());
    }

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = item.card.info.price ? item.card.info.price : item.card.info.defaultPrice;
        return acc + price;
    }, 0);

    return (
    <div className="m-4 p-4 text-center">
        <h1 className = "font-bold text-xl">Cart</h1>
        <div className="w-6/12 m-auto">
        <div className="flex justify-between">
            <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer" onClick={handleClick}>Clear Cart</button>
            <h2 className="font-semibold text-lg m-2">Total Price: ₹{totalPrice / 100}</h2>
        </div>
        {cartItems.length === 0 && <h1>Add Items to the cart</h1>}
        <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default Cart;