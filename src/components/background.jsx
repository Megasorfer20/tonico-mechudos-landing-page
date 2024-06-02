import React from 'react';

import cellAbjIz from "../assets/img/background-svg/cellAbjIz.svg";
import cellArrDer from "../assets/img/background-svg/cellAbjDer.svg";
import cellArrIz from "../assets/img/background-svg/cellArrIz.svg";
import cellAbjDer from "../assets/img/background-svg/cellArrDer.svg";
import pcTop from "../assets/img/background-svg/pcTop.svg";
import pcBottom from "../assets/img/background-svg/pcBottom.svg";

import "../css/background.css";

function Background() {
  return (
    <div className="background">
      <div className="cellhpone-bkg">
        <img
          src={cellArrIz}
          className="plant left-top" /* Ajusta la posición según sea necesario */
        />
        <img
          src={cellArrDer}
          className="plant right-top" /* Ajusta la posición según sea necesario */
        />
        <img
          src={cellAbjIz}
          className="plant left-bottom" /* Ajusta la posición según sea necesario */
        />
        <img
          src={cellAbjDer}
          className="plant right-bottom" /* Ajusta la posición según sea necesario */
        />
      </div>

      <div className="computer-bkg">
        <img
          src={pcTop}
          className="plant-pc left-top" /* Ajusta la posición según sea necesario */
        />
        <img
          src={pcBottom}
          className="plant-pc right-bottom" /* Ajusta la posición según sea necesario */
        />
      </div>
    </div>
  );
}

export default Background;
