function Card({ brand, description, price, id }) {
  return (
    <div className="card">
      <img className="like" src="/img/favorite.svg" alt="Like" />
      <img className="preview" src={`/img/products/${id}.avif`} alt="Card" />
      <h2>{brand}</h2>
      <p>{description}</p>
      <span>&#8364;{price}</span>
    </div>
  );
}

export default Card;
