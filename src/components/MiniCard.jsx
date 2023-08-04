function MiniCard() {
  return (
    <div className="mini-card">
      <div className="mini-card_info">
        <img width={62} src="/img/products/card-2.jpg" alt="" />
        <div className="mini-card_text">
          <h2>Balenciaga</h2>
          <p>Кеды женские</p>
        </div>
      </div>
      <img className="mini-card-close" src="/img/close.svg" alt="" />
    </div>
  );
}

export default MiniCard;
