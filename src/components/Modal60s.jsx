import './../css/modal60s.css';
import productModal from './../assets/img/productModal60s.jpeg';
import { IoCloseCircle } from "react-icons/io5";

import OfferCounter from './OfferCounter';
import BuyButton from './BuyButton';

function Modal60s(props){
    return(
        <div className="modal" style={props.modal ? {display: 'flex'} : {display: 'none'}}>
            <div className="modal60s__bg">
                <div className="closeModal" onClick={() => {
                    props.setModal(false)
                }}><IoCloseCircle /></div>
                <span className="oferta"><OfferCounter text="OFERTA POR TIEMPO LIMITADO!!!"/></span>
                <p className="parrafo">Por la compra de 3 tónicos Mechudos te regalamos un Shampoo Mechudos GRATIS.</p>
                <img src={productModal} alt="tonicos" />
                <p className="price"><span>$225.000</span> $205.000</p>
                <BuyButton setModal={props.setModalBuyButton} closeModalOffer={props.setModal} modalOffer={props.modal}/>
            </div>
        </div>
    )
}

export default Modal60s;