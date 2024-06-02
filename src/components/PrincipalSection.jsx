import './../css/principalSection.css';
import Products from './../assets/img/products.png';
import TonicoMechudos from './../assets/img/TONICOMECHUDOS.png';
import envioGratisFREE from './../assets/img/envioGratis.png';
import PagoContraentrega from './../assets/img/entrega2.png';
import React from 'react';

function PrincipalSection(){
    return(
        <div className="principalSection">
            <div className="LateralFrame bg-white">
                <img src={envioGratisFREE} alt="envio" />
            </div>
            <div className="greenFrame">
                <div className="framePart">
                    <div>
                        <h2 className="contorno">SI LLEVAS TRES TÓNICOS, TE REGALAMOS EL SHAMPOO TOTALMENTE GRATIS</h2>
                        <img className="frameImgOne" src={Products} alt="products" />
                        <p className="contorno parrafosData"> Precio: $205.000 <br /> A eso le llamo Ahorrar...</p>
                    </div>
                </div>
                <div className="framePart">
                    <div>
                        <h2 className="contorno">TÓNICO MECHUDOS ANTICAÍDA</h2>
                        <img className="frameImgTwo" src={TonicoMechudos} alt="products" />
                        <p className="contorno parrafosData"><span className="antesPrice">ANTES $95.000</span> <br/> PRECIO: $75.000 <br /> AHORRA $20.000 <br /> OFERTA LIMITADA!!!</p>
                    </div>
                </div>
            </div>
            <div className="LateralFrame">
                <img src={PagoContraentrega} alt="contraentrega" />
            </div>
        </div>
    )
}

export default PrincipalSection;