import React from 'react';
import './../css/smallBuyButton.css';
import { FaShoppingCart } from "react-icons/fa";

function SmallBuyButton(props){
    return(
        <button className="smallBuyButton" onClick={() => {
            props.setModal(true);
        }}>Compra Ahora <FaShoppingCart /></button>
    )
}

export default SmallBuyButton;