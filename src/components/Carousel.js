import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel=(props)=>{
    const arr=props.list[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
    };
    return arr?
        <div>
        <h1 className="text-5xl font-bold my-4 ml-4 mt-8 text-orange-400">What's on your mind?</h1>
        <div className="my-8">
        <Slider {...settings}>
        {
            arr.map((elem)=>{
                const offerImg=`https://media-assets.swiggy.com/swiggy/${elem.imageId}`;
                return <div key={elem.id}>
                    <img src={offerImg} />
                </div>
            })
        }
        </Slider>
        </div>
    </div>: <h1></h1>;
}

export default Carousel;