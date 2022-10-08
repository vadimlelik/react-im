import React from "react";
import "../GoodItem/good.css";

const GoodItem = ({ category, description, image, price, title }) => {
  return (
    <figure className="card">
      <img src={image} alt={category} />
      <figcaption>
        <h3 className="card__title">{title}</h3>
        {/* <span>{price}</span> */}
        <p>{description}</p>
        {/* <button>Купить</button> */}
      </figcaption>
    </figure>
  );
};

export default GoodItem;
