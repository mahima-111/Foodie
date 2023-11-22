import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import StarIcon from '@mui/icons-material/Star';

const RestaurantMenu= ()=>{
    const {resId}=useParams();
    const [resInfo,menu,offers]=useRestaurantMenu(resId);

    if (offers==null || resInfo==null || menu==null){
        return <h1 className="text-center font-bold my-8 text-4xl">Loading Restaurant Menu...</h1>;
    }
    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines}=resInfo;
    return (
        <div className="space-y-2 mt-8 mb-16 flex flex-col items-center">
            <h1 className="font-bold text-4xl">{name}</h1>
            <div className="flex gap-4 text-xl font-medium">
                <h2 className="">{avgRating}<span className="mr-2 text-yellow-300"><StarIcon/></span> ({totalRatingsString})</h2>
                <h2>{costForTwoMessage}</h2>
            </div>
            <h2 className="font-medium">{cuisines.join(', ')}</h2>

            <ul className="offer-list font-semibold text-lg flex gap-6 mb-4">{
                offers.map(element => {
                    const {offerIds,header}=element?.info;
                    return <li key={offerIds[0]} className="bg-orange-400 px-3 py-2 rounded-md cursor-pointer">{header}</li>;
                })
            }</ul>
            {console.log(menu)}
            <div className="accordian pt-4">{
                menu.filter((def)=>{
                    if(def.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                        return true;
                    else
                        return false;
                }).map((abc)=>{
                    return <MenuCard title={abc.card.card.title} itemCards={abc.card.card.itemCards} key={abc.card.card.title} />   
                })
            }</div>
        </div>
    )
}
export default RestaurantMenu;