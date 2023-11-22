
const Card=(props)=>{
    if(props==[]){
        return <h1>empty list</h1>;
    }
    // console.log(props);
    const {name,avgRating,totalRatingsString,costForTwo,cuisines,cloudinaryImageId,locality,areaName}=props.resData.info;
    const {header,subHeader}=props?.resData?.info?.aggregatedDiscountInfoV3 || " ";
    // const {slaString}=props.resData.info.sla;

    return <div className="card flex flex-col gap-1 p-4 rounded-md hover:scale-95 w-[22vw]">
        <div className="relative">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res img" className="rounded-md aspect-[4/3] "/>
        {header
        ?<h2 className="text-white font-bold text-xl w-[15vw] absolute bottom-[0.1rem] p-2">{header +" " + subHeader}</h2>
        : <h2>{""}</h2>}
        </div>
        <h3 className="font-bold text-2xl" >{name}</h3>
        <div className="flex justify-between font-medium text-md">
            <h4>{`⭐ ${avgRating}`}</h4>
        </div>
        <h4 className="text-lg text-gray-800 overflow-hidden whitespace-nowrap text-ellipsis" >{cuisines.join(", ")}</h4>
        <h4 className="text-lg text-gray-800">{locality+", "+areaName}</h4>
    </div>
};

export const PromotedCard=(Card)=>{
    return (props)=>{
        // console.log("in prom card");
        // console.log(props);
        return <div className="relative">
            <h1 className="bg-sky-400 w-fit px-4 py-2 absolute top-0 z-10">Promoted</h1>
            <Card {...props} />
        </div>
    }    
}

export default Card;