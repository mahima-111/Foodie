import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offers from "./Offers";
import Card from "./Card";
import useData from "../utils/useData";
import Carousel from "./Carousel";

const Body=()=>{
    const [listOfRes,setListOfRes]=useState([]);
    const [filteredRes,setFilteredRes]=useState([]);
    const [offerList,setOfferList]=useState([]);
    const [carouselList,setCarouselList]=useState([]);
    const [topResList,setTopResList]=useState([]);

    const onlineStatus=useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING`);

        const jsonData = await data.json();
        console.log(jsonData);
        
        const dataList= useData(jsonData,"restaurant_grid_listing");
        const apidata=dataList[0].card.card.gridElements?.infoWithStyle?.restaurants;

        const offerData=useData(jsonData,"topical_banner");
        const carouselData=useData(jsonData,"whats_on_your_mind");
        const topResData=useData(jsonData,"top_brands_for_you");

        setOfferList(offerData); 
        setCarouselList(carouselData);
        setTopResList(topResData);
        setListOfRes(apidata);
        setFilteredRes(apidata);   
    };

    if(onlineStatus===false){
        return <h1>No internet!!</h1>
    }
    
    if(filteredRes.length===0){
        return <h1 className="text-center font-bold text-4xl">Loading...</h1>
    }

    return <main className="flex justify-center">
        <div className="w-[90vw]">
        <Offers list={offerList}/>
        <Carousel list={carouselList}/>
        <div className="search-input px-8 py-4 space-x-4 text-center">
            <input type="text" id="search-text" className="border-2 border-blue-950 px-4 py-2 rounded-md" />
            <button type="button" className="px-4 py-2 border-2 border-blue-950 rounded-md" onClick={()=>{
                console.log(document.getElementById("search-text").value);
                let searchText=document.getElementById("search-text").value;
                const searchedList=listOfRes.filter((x)=>{
                    if(x.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        return true;
                    else
                        return false;
                });
                setFilteredRes(searchedList);
            }}>Search</button>
            <button type="button" className="px-4 py-2 border-2 border-blue-950 rounded-md" onClick={()=>{
                const filteredList=listOfRes.filter((x)=>{
                    if(x.info.avgRating>4)
                        return true;
                    else 
                        return false;
                });
                setFilteredRes(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <h1 className="text-5xl font-bold my-4 ml-4 mb-8 text-orange-400">Top restaurants near you!</h1>
        <div className="res-cards grid grid-cols-4 gap-x-2 gap-y-8 auto-rows-auto justify-items-center">
            {   
                filteredRes.map((restaurant)=>{
                    const {id}=restaurant.info;
                    return <Link to={`/restaurant/${id}`} key={id} className="flex items-stretch">
                        <Card resData={restaurant}  />
                    </Link>
                })
            }
        </div>
        </div>    
    </main>
};

export default Body;
