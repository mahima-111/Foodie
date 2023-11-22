import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoImg from "../images/logo.png";

const Header= ()=>{
    const [auth,setAuth]=useState('Login');
    const onlineStatus=useOnlineStatus();

    const cartQty= useSelector((store)=>{
        return store.cart.cartTotalQuantity;
    });

    return <nav className="navbar sticky top-0 w-full z-10">
        <div className="flex justify-between items-center px-12 py-2 bg-gray-100">
        <div className="logo cursor-pointer flex gap-4 items-center">
            <img src={logoImg} alt="logo" className="scale-75"/>
            <h1 className="text-orange-400 font-bold text-5xl">FOODIE</h1>
        </div>
        <ul className="nav-items flex gap-8 text-xl font-semibold ">
            <li>{onlineStatus?"🟢":"🔴"}</li>
            <li className="hover:text-orange-400"><Link to="/">Home</Link></li>
            <li className="hover:text-orange-400"><Link to="/about">About</Link></li>
            <li className="hover:text-orange-400"><Link to="/contact">Contact</Link></li>
            <button className="hover:text-orange-400" onClick={()=>{
                (auth ==='Login')?setAuth('Logout'):setAuth('Login');
            }} >{auth}</button>
            <li className="hover:text-orange-400"><Link to="/cart"><ShoppingCartIcon/>({cartQty})</Link></li>
        </ul>
        </div>
    </nav>
};

export default Header;