function MiniCard({ brand, description, id, removeFromCart }) {
  return (
    <div className="mini-card">
      <div className="mini-card_info">
        <img width={62} src={`/img/products/${id}.avif`} alt="Clothes" />
        <div className="mini-card_text">
          <h2>{brand}</h2>
          <p>{description}</p>
        </div>
      </div>
      <img className="mini-card-close" src="/img/close.svg" alt="Delete" onClick={() => removeFromCart()} />
    </div>
  );
}

export default MiniCard;
