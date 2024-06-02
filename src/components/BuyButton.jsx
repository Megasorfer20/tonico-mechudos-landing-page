import React from 'react';

import './../css/buyButton.css';
import { FaShoppingCart } from "react-icons/fa";

function BuyButton(props){
    return(
        <div className="buyButtonAligment">
            <button className="buyButton" onClick={() => {
                props.setModal(true);
                if(props.modalOffer){
                    props.closeModalOffer(false);
                }
            }}> <FaShoppingCart /> COMPRA AHORA <FaShoppingCart /> </button>
        </div>
    )
}


export default BuyButton;