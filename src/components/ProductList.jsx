import React from "react";
import Card from "./Card";
import axios from "axios";

function ProductList({ onClickCard, onClickLike, removeFromCart, removeFromLiked }) {

  const [clothesList, setClothesList] = React.useState([])

  React.useEffect(() => {
    axios.get('https://64cd2381bb31a268409a6640.mockapi.io/clothes').then(result => {
      setClothesList(result.data)
    })
  }, [])

  return (
    <div className="productList">
      <h1>Trending Now</h1>
      <div className="productList__content wrapper">
        {clothesList.map(product => (
          <Card
            brand={product.brand}
            description={product.description}
            price={product.price} id={product.id}
            onClickCard={() => onClickCard(product)}
            key={product.id}
            onClickLike={() => onClickLike(product)} removeFromCart={() => removeFromCart(product.id)}
            removeFromLiked={() => removeFromLiked(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
