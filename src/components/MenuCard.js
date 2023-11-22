import { useState } from "react";
import MenuItem from "./MenuItem";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const MenuCard=({title,itemCards})=>{

    const [showItem, setShowItem]=useState(true);
    const showItemFunc=()=>{
        setShowItem(!showItem);
    }

    return  (<div className="accordian-item w-[60vw] my-4" key={title}>
        <div className="accordian-title bg-orange-400 flex justify-between px-4 py-2 font-semibold text-xl cursor-pointer" onClick={()=>{            
            showItemFunc();
            }}>
            <span>{title}</span>
            <span>{showItem===true?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</span>
        </div>
        {showItem && <MenuItem menuList={itemCards} />}
    </div>);
}

export default MenuCard;