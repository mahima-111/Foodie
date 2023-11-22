import { useState, useEffect } from "react";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    const [menu,setMenu]=useState(null);
    const [offers,setOffers]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async ()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`);

        const jsonData=await data.json();
    
        const offerarr=jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const info=jsonData?.data?.cards[0]?.card?.card?.info;
        const menudata=jsonData?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.slice(1,-2);

        setResInfo(info);
        setOffers(offerarr);
        setMenu(menudata);
    }

    return [resInfo,menu,offers];
}

export default useRestaurantMenu;