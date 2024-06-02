import { IoStarHalf , IoStar, IoStarOutline   } from "react-icons/io5";
import React from 'react';

function Qualification(props){

    const getIcon = (qualification) => {
        switch(qualification){
            case 0:
                return <IoStar />
            case 1:
                return <IoStarHalf  />
            case 2:
                return <IoStarOutline /> 
        }
    }; 

    return(
        <div>
            {getIcon(props.qualification)}
        </div>
    )
}

export default Qualification;