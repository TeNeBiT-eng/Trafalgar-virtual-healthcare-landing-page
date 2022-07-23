import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="serviceImg">
        <img src={props.Img} alt="" />
        <p className="cardHeading">Search doctor</p>
        <p className="cardText">
          Choose your doctor from thousands of specialist, general, and trusted
          hospitals
        </p>
      </div>
    </div>
  );
}

export default Card;