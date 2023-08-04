import React from "react";
import Card from "./Card";

function ProductList() {

  const [clothesList, setClothesList] = React.useState([])

  React.useEffect(() => {
    fetch('https://64cd2381bb31a268409a6640.mockapi.io/clothes').then(result => {
      return result.json();
    }).then(json => {
      setClothesList(json);
    })
  }, []);

  return (
    <div className="productList">
      <h1>Сейчас в тренде</h1>
      <div className="productList__content wrapper">
        {clothesList.map(product => (
          <Card brand={product.brand} description={product.description} price={product.price} id={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
