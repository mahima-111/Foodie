const TopRes=(props)=>{
    // console.log(props);
    const arr=props.list[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(arr);
    
    return arr?<div className="my-8 grid grid-cols-8 gap-y-4">
        {
            arr.map((elem)=>{
                const {id,name}=elem.info;
                // const offerImg=`https://media-assets.swiggy.com/swiggy/${elem.imageId}`;
                // console.log(offerImg);
                return <div key={id}>
                    <h1>{name}</h1>
                </div>
            })
        }
    </div>: <h1>NO Carousel AT THE MOMENT</h1>;
}

export default TopRes;