import React, { useState } from 'react';
import Basketcompo from './basketcompo';
import './Basketproject.css';

function Basketproject() {
  const [leftBasket, setLeftBasket] = useState(10);
  const [rightBasket, setRightBasket] = useState(0);
  function updateLeftBasket() {
    if (rightBasket > 0) {
        setLeftBasket(leftBasket + 1);
        setRightBasket(rightBasket - 1);
    }
}
function updateRightBasket() {
    if (leftBasket > 0) {
        setRightBasket(rightBasket + 1);
        setLeftBasket(leftBasket - 1);
    }
}

  return (
    <div className="basket-container">
      <Basketcompo basketVal={leftBasket} basket="basket-1" />
      <img
        className="basket-image"
        onClick={updateLeftBasket}
        src="https://as2.ftcdn.net/v2/jpg/02/36/89/31/1000_F_236893152_GiQWECdcGlRq3CeOfBdKbvBbfz6H2vb8.jpg"
        alt="left-arrow"
      />
      <img
        className="basket-image" onClick={updateRightBasket}
        src="https://static.vecteezy.com/system/resources/previews/014/637/974/original/straight-pointed-arrow-icon-black-arrow-pointing-to-the-right-black-direction-pointer-vector.jpg"
        alt="right-arrow"
      />
      <Basketcompo basketVal={rightBasket} basket="basket-2" />
    </div>
  );
}

export default Basketproject;

