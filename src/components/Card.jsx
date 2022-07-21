import React from "react";
import { SVG } from "../asset/svg/Svg";


function Card (){
    return (
        <div className="card">
        <div className="serviceImg">
          <img src={SVG.Trafalgarsearch} alt="" />
          <p className="cardHeading">Search doctor</p>
          <p className="cardText">
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>
      </div>
    )
}

export default Card;