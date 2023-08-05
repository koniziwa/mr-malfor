import React from "react";
import MiniCard from "./MiniCard";

function Overlay({ cartClothes, onClickClose, removeFromCart }) {

  const [totalCost, setTotalCost] = React.useState(0);

  React.useEffect(() => {
    let sum = 0;
    cartClothes.forEach(cartItem => {
      sum += cartItem.price * 100
    })
    setTotalCost(sum)
  }, [cartClothes])

  return (
    <div className="overlay">
      <div className="overlay__cart">
        <div className="overlay__cart_top">
          <span>
            Your cart:</span>
          <img onClick={onClickClose} src="/img/close.svg" alt="Close" />
        </div>
        <div className="overlay__cart_content">
          {cartClothes.map(cartItem => (
            <MiniCard
              brand={cartItem.brand}
              description={cartItem.description}
              id={cartItem.id}
              removeFromCart={() => removeFromCart(cartItem.id)}
              key={cartItem.id}
            />
          ))}
        </div>
        <div className="overlay__cart_bottom">
          <div className="cost">
            <p>Total cost</p>
            <div className="dash"></div>
            <span>&#8364;{totalCost / 100}</span>
          </div>
          <button className="cart__button">Proceed to purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
