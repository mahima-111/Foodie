import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Footer=()=>(
    <div className="flex justify-center">
        <footer className="mb-8 mt-4 text-center w-[85%]">
        <hr className="my-4 text-center"></hr>
        <h1 className="text-2xl font-semibold"><span className="text-orange-400 font-bold pr-2">FOODIE</span> made by Mahima<span className='text-orange-400 font-bold pl-2'><FavoriteBorderIcon/></span></h1>
        </footer>
    </div>
);

export default Footer;