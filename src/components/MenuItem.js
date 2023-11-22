import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItem=({menuList})=>{
    const dispatchFunc= useDispatch();
    const addButtonHandler=(itemData)=>{
        dispatchFunc(addItem(itemData));
    };
    const removeButtonHandler=(itemData)=>{
        dispatchFunc(removeItem(itemData));
    }
    const cartItems=useSelector((store)=> store.cart.items);
    return (<div className="accordian-content">
        {menuList.map((abc)=>{
            const {id,name,price,defaultPrice,imageId,description}=abc.card.info;
            const {vegClassifier}=abc?.card?.info?.itemAttribute || 1;
            let isveg;
            vegClassifier==="VEG"?isveg="🟢":isveg="🔴";
            const img=`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`;

            const ind=cartItems.findIndex((item)=>{
                return id===item.card.info.id;
            });
            console.log(ind);
            return (<div key={id} className="ml-8 flex justify-between my-4 font-medium text-xl border-b-2 pb-4" >
                <div className="basis-2/3">
                    <h3>{`${isveg} ${name}`}</h3>
                    <h3 className="ml-8">{`Rs${price/100 || defaultPrice/100}`}</h3>
                    <h3 className="ml-8 font-normal text-gray-500 text-base">{description}</h3>
                </div>
                <div className="relative basis-1/4">
                    {imageId?<img src={img} className=" aspect-square border border-black rounded-md w-full"></img>:<div className="aspect-square bg-slate-400 flex items-center justify-center rounded-md"> img not available</div>}
                    {ind>-1 && cartItems[ind].cartQuantity>=1?
                    <div className="flex justify-between rounded-md mt-4">
                        <button type="button" className="bg-red-500 px-6 py-1  text-lg rounded-md" onClick={()=>removeButtonHandler(abc)}>-</button>
                        <span >{cartItems[ind].cartQuantity}</span>
                    <button type="button" className="bg-green-300 px-6 py-1 text-lg rounded-md" onClick={()=> addButtonHandler(abc)}>+</button>
                    </div>
                    :<button type="button" className="bg-green-300 px-6 py-1 rounded-md text-lg w-full mt-4" onClick={()=> addButtonHandler(abc)}>ADD</button>}
                </div>
            </div>);
        })}
    </div>);
}
export default MenuItem;