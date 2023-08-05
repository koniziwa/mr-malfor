import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Promo from './components/Promo';
import Articles from './components/Articles';
import ProductList from './components/ProductList';
import Journal from './components/Journal';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import axios from 'axios';


function App() {

  const [cartClothes, setCartClothes] = React.useState([])
  const [isCartOpened, setCartOpened] = React.useState(false)

  const addToCart = cartItem => {
    setCartClothes(prev => [...prev, cartItem])
  }

  const addToLiked = likedItem => {
    axios.post("https://64cd2381bb31a268409a6640.mockapi.io/likedClothes", likedItem)
  }

  const removeFromCart = removeItemId => {
    setCartClothes(prev => prev.filter(item => item.id !== removeItemId))
  }

  const removeFromLiked = removeItemId => {
    try {
      axios.delete(`https://64cd2381bb31a268409a6640.mockapi.io/likedClothes/${removeItemId}`)
    } catch (error) {
      alert('Произошла ошибка!')
    }
  }

  return (
    <>
      {isCartOpened && <Overlay
        cartClothes={cartClothes}
        onClickClose={() => setCartOpened(false)}
        removeFromCart={id => removeFromCart(id)}
      />}
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <Navigation />
      <Promo />
      <hr />
      <Articles />
      <hr />
      <ProductList
        onClickCard={product => addToCart(product)}
        onClickLike={product => addToLiked(product)}
        removeFromCart={id => removeFromCart(id)}
        removeFromLiked={id => removeFromLiked(id)}
      />
      <hr />
      <Journal />
      <Footer />
    </>
  );
}

export default App;
