import {LOGO_URL} from "../utils/constants"
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between border-black border">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link className="nav-li" to="/">Home</Link></li>
                    <li className="px-4"><Link className="nav-li" to="/about">About Us</Link></li>
                    <li className="px-4"><Link className="nav-li" to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link className="nav-li" to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="px-4" onClick = {() => {
                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;