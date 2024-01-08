import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";

const Cart=()=>{
    const cartItems=useSelector((store)=> store.cart.items);
    const cartPrice=useSelector((store)=> store.cart.cartTotalPrice);
    const cartQuantity=useSelector((store)=> store.cart.cartTotalQuantity);

    const [delivery,setDelivery]=useState(0);
    const [taxes,setTaxes]=useState(0);

    const dispatchFunc=useDispatch();
    useEffect(()=>{
        cartPrice>1000?setDelivery(0):setDelivery(70);
        cartPrice>0?setTaxes(cartPrice/10):setTaxes(0);
    },[cartPrice]);
    const clearHandler=()=>{
        dispatchFunc(clearCart());
    };
    const addButtonHandler=(item)=>{
        dispatchFunc(addItem(item));
    };
    const removeButtonHandler=(item)=>{
        dispatchFunc(removeItem(item));
    };
    
    return <div className="flex justify-center">
        <div className="text-center flex w-[80vw] justify-between">
        <div className="mt-8 w-[53vw]">
        <h1 className="text-5xl font-bold mt-4">My Cart ({cartQuantity})</h1>
        <button type="button" onClick={clearHandler}
        className="my-8 px-6 py-2 text-white bg-orange-400 font-semibold rounded-md">Clear cart</button>
        {cartQuantity===0 && (<h1 className="font-bold text-2xl mb-4 text-orange-400">Cart is Empty! Wanna Add Something?</h1>)}
        {cartItems.map((elem)=>{
            const {id,name,price,defaultPrice,imageId}=elem.card.info;
            const {vegClassifier}=elem?.card?.info?.itemAttribute || 1;
            let isveg;
            vegClassifier==="VEG"?isveg="🟢":isveg="🔴";
            const img=`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
            const ind=cartItems.findIndex((item)=>{
                return id===item.card.info.id;
            });
            return (<div key={id}>
                <div className="flex mb-8 gap-4">
                {imageId?<img src={img} className=" aspect-square border border-black rounded-md w-1/5"></img>:<div className="aspect-square bg-slate-400 flex items-center justify-center rounded-md"> img not available</div>}
                    <div className="flex flex-col text-xl font-semibold text-left gap-4">
                        <h3>{`${isveg} ${name}`}</h3>
                        <h3 className="pl-8">{`₹${price/100 || defaultPrice/100}`}</h3>
                        <div className="flex justify-between rounded-md ml-8 w-[10vw]">
                            <button type="button" className="bg-red-500 px-4 py-1  text-md rounded-md font-bold" onClick={()=>removeButtonHandler(cartItems[ind])}>-</button>
                            <span >{cartItems[ind].cartQuantity}</span>
                        <button type="button" className="bg-green-300 px-4 py-1 text-md rounded-md font-bold" onClick={()=>addButtonHandler(cartItems[ind])}>+</button>
                        </div>
                    </div>
                </div>
            </div>);
        })}
        
        </div>
        <div className=" border-2 border-orange-400 rounded-md py-4 px-8 mt-16 w-[25vw]">
            <h1 className="text-2xl font-bold pt-4 pb-8">Price :<span className="ml-4">₹{cartPrice}</span></h1>
            <h1 className="text-xl font-bold">Delivery Charge : <span className="ml-4">₹ {delivery}</span></h1>
            <h1 className="text-lg font-bold pt-4 pb-8">(Free delivery on orders above 1000)</h1>
            <h1 className="text-2xl font-bold pt-4 pb-8">Taxes (10%) :  <span className="ml-4">₹{taxes}</span></h1>
            <h1 className="text-2xl font-bold pt-4 pb-8">Total Price :  <span className="ml-4">₹{cartPrice+delivery+taxes}</span></h1>
            <button type="button" className="bg-orange-400 px-6 py-2 text-2xl font-bold rounded-md mb-16">Proceed to Payment <ArrowForwardIcon/> </button>
        </div>
    </div>
    </div>

};

export default Cart;