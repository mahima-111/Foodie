import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Offers=(props)=>{
    const arr=props.list[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    let slide= arr.length>=4?4:arr.length;
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slide ,
        slidesToScroll: 1,
    };

    return arr?<div>
        <h1 className="text-5xl font-bold my-4 ml-4 mt-8 text-orange-400">Today's Deals!</h1>
        <div className="mt-8 mb-16">
        <Slider {...settings}>
        {
            arr.map((elem)=>{
                const offerImg=`https://media-assets.swiggy.com/swiggy/${elem.imageId}`;
                return <div key={elem.id}>
                    <img src={offerImg} className="w-[20vw]"/>
                </div>
            })
        }
        </Slider>
        </div>
    </div>: <h1></h1>;
}
export default Offers;