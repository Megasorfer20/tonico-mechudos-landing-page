import React from 'react';

import './../css/offer.css';
import DuoTónicoyShampooMechudos from './../assets/img/DuoTonicoShampoo.png';
import { ProductData } from '../app/productData.js';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
function Offer({setModal}) {

    const element = document.getElementById("cardsAlignment");
    const scrollRight = () => {
        element.scrollLeft = element.scrollLeft + 300;
    }

    const scrollLeft = () => {
        element.scrollLeft = element.scrollLeft - 300;
    }

    return (
        <div className="offer">
            <h2>Nuestras Mejores Ofertas</h2>
            <div className="sectionScroll">
                <button className="buttonScroll buttonScrollLeft" onClick={scrollLeft} ><FaChevronLeft /></button>
                <div className="cardsAlignment" id="cardsAlignment">
                    {
                        ProductData.map((product, index) => (
                            <div className="productCard" key={index}>
                                <img src={DuoTónicoyShampooMechudos} alt="product" />
                                <h2>{product.title}</h2>
                                <p>Precio: <span className="cardDeforePrice">{product.beforePrice} </span> {product.price}</p>
                                <button onClick={() => { setModal(true) }}>Comprar</button>
                            </div>
                        ))
                    }
                </div>
                <button className="buttonScroll buttonScrollRight" onClick={scrollRight} ><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default Offer;