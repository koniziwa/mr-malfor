import React from "react";

function Card({ brand, description, price, id, onClickCard, onClickLike, removeFromCart, removeFromLiked }) {

  const [isLiked, setLiked] = React.useState(false);
  const [isAdded, setAdded] = React.useState(false);

  return (
    <div className="card">
      <img onClick={() => {
        isLiked ? removeFromLiked() : onClickLike();
        setLiked(!isLiked);
      }} className="like" src={
        isLiked ? "/img/favorite-active.svg" : "/img/favorite.svg"
      } alt="Like" />
      <img className="preview" src={`/img/products/${id}.avif`} alt="Card" />
      <img onClick={() => {
        isAdded ? removeFromCart() : onClickCard();
        setAdded(!isAdded);
      }} src={isAdded ? "/img/add-active.svg" : "/img/add.svg"} alt="add" className="add" />
      <h2>{brand}</h2>
      <p>{description}</p>
      <span>&#8364;{price}</span>
    </div>
  );
}

export default Card;
