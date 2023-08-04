import MiniCard from "./MiniCard";

function Overlay() {
  return (
    <div className="overlay">
      <div className="overlay__cart">
        <div className="overlay__cart_top">
          <span>Ваши товары:</span>
          <img src="/img/close.svg" alt="Close" />
        </div>
        <div className="overlay__cart_content">
          <MiniCard />
          <MiniCard />
        </div>
        <div className="overlay__cart_bottom">
          <div className="cost">
            <p>Итоговая стоимость</p>
            <div className="dash"></div>
            <span>15 999&#8381;</span>
          </div>
          <button className="cart__button">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
